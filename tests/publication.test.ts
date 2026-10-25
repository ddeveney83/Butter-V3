import { test } from "node:test";
import assert from "node:assert/strict";
import { canonicalOrigin } from "../lib/site-config";
import { publishedRoutes, routes } from "../content/routes";
import { caseStudies, insights } from "../content/editorial";
import { publishedInsights } from "../lib/insights";

test("approval alone does not publish content or expose it to a sitemap", () => {
  const draft = routes[0];
  assert.deepEqual(
    publishedRoutes([
      { ...draft, status: "draft" },
      { ...draft, status: "approved" },
    ]),
    [],
  );
  assert.equal(publishedRoutes([{ ...draft, status: "published" }]).length, 1);
  assert.deepEqual(
    publishedRoutes().map((route) => route.path),
    ["/about", "/insights"],
  );
  assert.equal(caseStudies.length, 0);
  assert.equal(publishedInsights(insights).length, 2);
});
test("canonical origin cannot silently invent a domain or accept unsafe configuration", () => {
  assert.equal(canonicalOrigin(""), undefined);
  assert.equal(canonicalOrigin("https://example.org/"), "https://example.org");
  for (const value of [
    "http://example.org",
    "https://user:secret@example.org",
    "https://example.org/path",
    "https://example.org?x=1",
    "invalid",
  ])
    assert.throws(() => canonicalOrigin(value));
});
