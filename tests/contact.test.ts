import { test } from "node:test";
import assert from "node:assert/strict";
import { createContactHandler } from "../lib/contact/handler";
import { enquirySchema } from "../lib/contact/validation";
import {
  contactConfig,
  publicContactEmail,
  type ContactConfig,
} from "../lib/contact/config";
import { ContactRateLimiter, contactRateKey } from "../lib/contact/rate-limit";
import {
  configureContactMeasurement,
  recordContactEvent,
} from "../lib/measurement";
const config: ContactConfig = {
  from: "sender@example.org",
  to: "inbox@example.org",
  apiKey: "re_synthetic_test_only",
  rateLimitSecret: "synthetic-test-secret-at-least-32-characters",
  trustedProxy: null,
};
const valid = () => ({
  name: "Test Person",
  email: "visitor@example.org",
  organisation: "Test organisation",
  support: "learning-platforms-lms",
  brief: "A synthetic enquiry for testing only.",
  budget: "",
  timeline: "",
  privacy: true,
  website: "",
});
function request(
  body: unknown = valid(),
  headers: Record<string, string> = {},
) {
  return new Request("https://example.org/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "https://example.org",
      ...headers,
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}
const silent = () => {};
test("configuration fails closed and fields reject header injection, unknown destinations and missing acknowledgement", () => {
  assert.equal(contactConfig({}), null);
  const env = {
    CONTACT_ENABLED: "true",
    CONTACT_FROM_EMAIL: config.from,
    CONTACT_TO_EMAIL: config.to,
    RESEND_API_KEY: config.apiKey,
    CONTACT_RATE_LIMIT_SECRET: config.rateLimitSecret,
  };
  assert.ok(contactConfig(env));
  assert.equal(contactConfig({ ...env, CONTACT_ENABLED: "false" }), null);
  assert.equal(
    contactConfig({ ...env, CONTACT_RATE_LIMIT_SECRET: "short" }),
    null,
  );
  assert.equal(
    contactConfig({
      ...env,
      CONTACT_FROM_EMAIL: "bad\r\nBcc: hidden@example.org",
    }),
    null,
  );
  assert.equal(publicContactEmail("not-an-email"), null);
  assert.equal(publicContactEmail(config.to), config.to);
  for (const body of [
    { ...valid(), name: "Bad\r\nBcc: test@example.org" },
    { ...valid(), email: "test@example.org\nBcc: other@example.org" },
    { ...valid(), brief: "short" },
    { ...valid(), brief: "x".repeat(5001) },
    { ...valid(), privacy: false },
    { ...valid(), to: "other@example.org" },
    { ...valid(), support: "invented" },
  ])
    assert.equal(enquirySchema.safeParse(body).success, false);
});
test("HTTP guardrails reject cross-site, unsupported, malformed, oversized and invalid requests without delivery", async () => {
  let sent = 0;
  const handler = createContactHandler({
    getConfig: () => config,
    send: async () => {
      sent++;
      return Response.json({ id: "synthetic" });
    },
    warn: silent,
  });
  assert.equal(
    (await handler(request(valid(), { Origin: "https://outside.example" })))
      .status,
    403,
  );
  assert.equal(
    (await handler(request(valid(), { "Sec-Fetch-Site": "cross-site" })))
      .status,
    403,
  );
  assert.equal(
    (await handler(request(valid(), { "Content-Type": "text/plain" }))).status,
    415,
  );
  assert.equal((await handler(request("{"))).status, 400);
  assert.equal((await handler(request("x".repeat(32769)))).status, 413);
  assert.equal(
    (await handler(request({ ...valid(), email: "invalid" }))).status,
    422,
  );
  assert.equal(
    (await handler(request({ ...valid(), website: "spam.example" }))).status,
    422,
  );
  assert.equal(sent, 0);
});
test("unconfigured delivery never returns success, sends, logs PII or leaks credentials", async () => {
  const warnings: string[] = [];
  let sent = false;
  const handler = createContactHandler({
    getConfig: () => null,
    send: async () => {
      sent = true;
      throw new Error();
    },
    warn: (message) => warnings.push(message),
  });
  const response = await handler(request());
  assert.equal(response.status, 503);
  assert.equal((await response.json()).ok, false);
  await handler(request());
  assert.equal(sent, false);
  assert.equal(warnings.length, 1);
  assert.equal(warnings.join().includes(valid().email), false);
  const local = new Request("http://localhost:3000/api/contact", {
    method: "POST",
    headers: {
      Origin: "http://127.0.0.1:3000",
      Host: "127.0.0.1:3000",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(valid()),
  });
  assert.equal((await handler(local)).status, 503);
});
test("only provider acceptance acknowledges delivery; recipient and headers are controlled on the server", async () => {
  let sentBody: Record<string, unknown> | undefined;
  let sentHeaders: Headers | undefined;
  const handler = createContactHandler({
    getConfig: () => config,
    warn: silent,
    send: async (url, options) => {
      assert.equal(url, "https://api.resend.com/emails");
      sentBody = JSON.parse(String(options?.body));
      sentHeaders = new Headers(options?.headers);
      return Response.json({ id: "synthetic-accepted-id" });
    },
  });
  const response = await handler(request());
  assert.equal(response.status, 200);
  assert.equal((await response.json()).ok, true);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.deepEqual(sentBody?.to, [config.to]);
  assert.equal(sentBody?.reply_to, valid().email);
  assert.equal(sentBody?.subject, "New Butter website enquiry");
  assert.equal("html" in sentBody!, false);
  assert.match(String(sentBody?.text), /A synthetic enquiry/);
  assert.equal(sentHeaders?.get("authorization"), `Bearer ${config.apiKey}`);
  assert.equal(sentHeaders?.get("idempotency-key")?.length, 64);
  for (const send of [
    async () =>
      Response.json({ error: "secret-provider-detail" }, { status: 401 }),
    async () => Response.json({}),
    async () => {
      throw new Error("secret-provider-detail");
    },
  ]) {
    const failed = await createContactHandler({
      getConfig: () => config,
      send,
      warn: silent,
    })(request());
    assert.equal(failed.status, 502);
    const body = await failed.text();
    assert.equal(body.includes("secret-provider-detail"), false);
    assert.equal(body.includes(config.apiKey), false);
  }
});
test("attempt limiter expires, bounds capacity and does not trust arbitrary forwarded IPs", async () => {
  let now = 0;
  const limiter = new ContactRateLimiter(() => now);
  for (let i = 0; i < 5; i++) assert.equal(limiter.check("same"), 0);
  assert.equal(limiter.check("same"), 900);
  now = 900001;
  assert.equal(limiter.check("same"), 0);
  for (let i = 0; i < 10000; i++) limiter.check(`key-${i}`);
  assert.equal(limiter.check("overflow"), 900);
  const key = contactRateKey(request(), config);
  assert.equal(
    key,
    contactRateKey(
      request(valid(), { "x-forwarded-for": "192.0.2.1" }),
      config,
    ),
  );
  assert.equal(
    key,
    contactRateKey(
      request(valid(), { "x-nf-client-connection-ip": "192.0.2.1" }),
      config,
    ),
  );
  const trusted = { ...config, trustedProxy: "netlify" as const };
  assert.notEqual(
    key,
    contactRateKey(
      request(valid(), { "x-nf-client-connection-ip": "192.0.2.1" }),
      trusted,
    ),
  );
  const handler = createContactHandler({
    getConfig: () => config,
    send: async () => Response.json({ id: "synthetic" }),
    warn: silent,
  });
  for (let i = 0; i < 5; i++) await handler(request());
  const response = await handler(request());
  assert.equal(response.status, 429);
  assert.ok(Number(response.headers.get("retry-after")) > 0);
});
test("measurement is inactive until explicitly configured with consent and accepts no enquiry properties", () => {
  const events: unknown[] = [];
  configureContactMeasurement((...values) => events.push(values), false);
  recordContactEvent("contact_form_start");
  assert.equal(events.length, 0);
  configureContactMeasurement((...values) => events.push(values), true);
  recordContactEvent("contact_form_success");
  assert.deepEqual(events, [["contact_form_success", { path: "/contact" }]]);
  configureContactMeasurement(null, false);
});
