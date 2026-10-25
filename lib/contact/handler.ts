import { createHmac } from "node:crypto";
import {
  enquirySchema,
  enquiryErrors,
  supportOptions,
  type Enquiry,
} from "./validation";
import { contactConfig, type ContactConfig } from "./config";
import { ContactRateLimiter, contactRateKey } from "./rate-limit";
import { canonicalOrigin } from "../site-config";

const maxBytes = 32768;
const json = (
  body: unknown,
  status: number,
  headers: Record<string, string> = {},
) =>
  Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
function emailText(data: Enquiry) {
  return [
    "New Butter website enquiry",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Organisation: ${data.organisation || "Not supplied"}`,
    `Support: ${supportOptions.find((option) => option.value === data.support)?.label ?? "Not sure yet"}`,
    `Budget: ${data.budget || "Not supplied"}`,
    `Timeline: ${data.timeline || "Not supplied"}`,
    "",
    "Project brief:",
    data.brief,
    "",
    "The sender acknowledged the website privacy notice. No marketing subscription was requested.",
  ].join("\n");
}
async function readBody(request: Request) {
  const length = request.headers.get("content-length");
  if (length && (!/^\d+$/.test(length) || Number(length) > maxBytes))
    throw new RangeError("body");
  const reader = request.body?.getReader();
  if (!reader) throw new SyntaxError("body");
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBytes) {
        await reader.cancel();
        throw new RangeError("body");
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.length;
    }
    return JSON.parse(
      new TextDecoder("utf-8", { fatal: true }).decode(bytes),
    ) as unknown;
  } finally {
    reader.releaseLock();
  }
}
export function createContactHandler({
  getConfig = contactConfig,
  send = fetch,
  limiter = new ContactRateLimiter(),
  warn = (message: string) => console.warn(message),
}: {
  getConfig?: () => ContactConfig | null;
  send?: typeof fetch;
  limiter?: ContactRateLimiter;
  warn?: (message: string) => void;
} = {}) {
  let warned = false;
  return async function handle(request: Request) {
    const url = new URL(request.url);
    // Next may normalise Request.url to localhost internally; Host is the browser's
    // destination. An approved canonical origin takes precedence when configured.
    const expectedOrigin =
      canonicalOrigin() ??
      `${url.protocol}//${request.headers.get("host") ?? url.host}`;
    if (
      request.headers.get("origin") !== expectedOrigin ||
      request.headers.get("sec-fetch-site") === "cross-site"
    )
      return json(
        {
          ok: false,
          message: "Please send your enquiry from the Butter website.",
        },
        403,
      );
    if (
      request.headers
        .get("content-type")
        ?.split(";")[0]
        .trim()
        .toLowerCase() !== "application/json"
    )
      return json(
        { ok: false, message: "This form requires a JSON request." },
        415,
      );
    const config = getConfig();
    const retry =
      limiter.check("global", 60) ||
      limiter.check(contactRateKey(request, config), config ? 5 : 20);
    if (retry)
      return json(
        { ok: false, message: "Too many attempts. Please try again later." },
        429,
        { "Retry-After": String(retry) },
      );
    let body: unknown;
    try {
      body = await readBody(request);
    } catch (error) {
      return json(
        {
          ok: false,
          message:
            error instanceof RangeError
              ? "Your enquiry is too large. Please shorten it."
              : "The enquiry could not be read. Please try again.",
        },
        error instanceof RangeError ? 413 : 400,
      );
    }
    const result = enquirySchema.safeParse(body);
    if (!result.success)
      return json(
        {
          ok: false,
          message: "Please check the highlighted fields.",
          errors: enquiryErrors(result.error),
        },
        422,
      );
    if (result.data.website.trim())
      return json(
        {
          ok: false,
          message: "This enquiry could not be accepted. Please try again.",
        },
        422,
      );
    if (!config) {
      if (!warned) {
        warn(
          "Butter contact delivery unavailable: provider or destination configuration is incomplete or disabled.",
        );
        warned = true;
      }
      return json(
        {
          ok: false,
          message:
            "Online enquiries are not available yet. Your message has not been sent.",
        },
        503,
      );
    }
    try {
      // Fixed provider URL; no browser-supplied recipient, credentials, endpoint or headers.
      const response = await send("https://api.resend.com/emails", {
        method: "POST",
        signal: AbortSignal.timeout(10000),
        redirect: "error",
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
          "Content-Type": "application/json",
          "Idempotency-Key": createHmac("sha256", config.rateLimitSecret)
            .update(JSON.stringify(result.data))
            .digest("hex"),
        },
        body: JSON.stringify({
          from: `Butter <${config.from}>`,
          to: [config.to],
          reply_to: result.data.email,
          subject: "New Butter website enquiry",
          text: emailText(result.data),
        }),
      });
      if (!response.ok) throw new Error("provider");
      const accepted: unknown = await response.json();
      if (
        !accepted ||
        typeof accepted !== "object" ||
        !("id" in accepted) ||
        typeof accepted.id !== "string" ||
        !accepted.id.trim()
      )
        throw new Error("provider");
      return json(
        {
          ok: true,
          message:
            "Your enquiry has been accepted for delivery. Thank you for getting in touch.",
        },
        200,
      );
    } catch {
      // A timeout can be ambiguous. Do not claim receipt or expose provider responses/PII.
      return json(
        {
          ok: false,
          message:
            "We could not confirm delivery. Please try again later or use the contact email if one is shown.",
        },
        502,
      );
    }
  };
}
