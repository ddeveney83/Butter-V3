import { test } from "node:test";
import assert from "node:assert/strict";
import { approvedFounder, aboutStructuredData } from "../lib/about";
import type { FounderProfile } from "../content/about";

function profile(): FounderProfile {
  return {
    name: "Test-only person",
    role: "Test-only role",
    biography: ["Synthetic biography used only in tests."],
    credentials: [],
    approval: "Synthetic approval reference",
    portrait: {
      src: "/assets/people/test-only.jpg",
      alt: "Test-only portrait",
      rights: "Synthetic permission reference",
    },
  };
}
test("founder identity is withheld without approved biography and genuine cleared portrait", () => {
  assert.equal(approvedFounder(), null);
  assert.equal(approvedFounder(null), null);
  assert.equal(approvedFounder(profile())?.name, "Test-only person");
  for (const mutate of [
    (value: FounderProfile) => {
      value.approval = "";
    },
    (value: FounderProfile) => {
      value.biography = [];
    },
    (value: FounderProfile) => {
      value.biography = [" "];
    },
    (value: FounderProfile) => {
      value.portrait.rights = "";
    },
    (value: FounderProfile) => {
      value.portrait.src = "/assets/placeholders/workshop-concept.png";
    },
  ]) {
    const value = profile();
    mutate(value);
    assert.equal(approvedFounder(value), null);
  }
});
test("Devon identity does not manufacture a local business, address or person", () => {
  assert.deepEqual(
    aboutStructuredData("draft", "https://example.org", profile()),
    [],
  );
  assert.deepEqual(aboutStructuredData("published", "", profile()), []);
  const schema = aboutStructuredData("published", "https://example.org", null);
  assert.equal(schema[0]["@type"], "Organization");
  assert.deepEqual(
    schema[0].areaServed.map((area) => area.name),
    ["Devon", "South West England", "United Kingdom"],
  );
  assert.equal("founder" in schema[0], false);
  for (const unsupported of [
    "LocalBusiness",
    "streetAddress",
    "openingHours",
    "aggregateRating",
  ])
    assert.equal(JSON.stringify(schema).includes(unsupported), false);
});
