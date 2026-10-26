import { test } from "node:test";
import assert from "node:assert/strict";
import {
  publishedCases,
  isPublishableCase,
  caseBreadcrumbs,
} from "../lib/work";
import { filterWork } from "../lib/work-filter";
import { reviewCase, reviewCards } from "../lib/work-review";
import type { CaseStudy } from "../content/case-studies";

function fixture(): CaseStudy {
  // Synthetic test input only; never added to the real content collection.
  return {
    ...structuredClone(reviewCase),
    slug: "synthetic-case",
    status: "published",
    approval: {
      owner: "Synthetic test approval",
      clientPermission: "Synthetic test permission",
    },
    role: {
      kind: "employment",
      description: "Synthetic employment attribution",
    },
    evidence: ["Synthetic qualitative evidence"],
    hero: {
      src: "/assets/work/synthetic.jpg",
      alt: "Synthetic test image",
      rights: "Synthetic test permission",
    },
  };
}
test("publication fails closed when status, role, rights or evidence are incomplete", () => {
  const complete = fixture();
  assert.equal(isPublishableCase(complete), true);
  const mutations: ((entry: CaseStudy) => void)[] = [
    (entry) => {
      entry.status = "draft";
    },
    (entry) => {
      entry.status = "approved";
    },
    (entry) => {
      entry.approval.owner = "";
    },
    (entry) => {
      entry.approval.clientPermission = "";
    },
    (entry) => {
      entry.role.description = "";
    },
    (entry) => {
      entry.evidence = [];
    },
    (entry) => {
      entry.hero!.rights = "";
    },
    (entry) => {
      entry.hero!.src = "/assets/placeholders/laptop-concept.png";
    },
    (entry) => {
      entry.hero!.src = "/assets/work/../private.png";
    },
    (entry) => {
      entry.outcomes = [
        { value: "100%", label: "Synthetic outcome", evidence: "" },
      ];
    },
    (entry) => {
      entry.serviceSlugs = ["nonexistent-service"];
    },
  ];
  for (const mutate of mutations) {
    const entry = fixture();
    mutate(entry);
    assert.equal(isPublishableCase(entry), false);
  }
  assert.equal(isPublishableCase(reviewCase), false);
  assert.equal(publishedCases([complete, reviewCase]).length, 1);
  assert.equal(publishedCases().length, 16);
});
test("category filtering handles overlapping tags, all and empty results without altering input", () => {
  const entries = [
    { ...reviewCards[0], tags: ["Compliance" as const] },
    reviewCards[1],
  ];
  assert.equal(filterWork(entries, "All").length, 2);
  assert.equal(filterWork(entries, "Compliance").length, 1);
  assert.equal(filterWork(entries, "Charity & Non-profit").length, 1);
  assert.equal(filterWork(entries, "Strategy").length, 0);
  assert.equal(entries.length, 2);
});
test("case breadcrumbs are withheld for drafts and derive only approved hierarchy", () => {
  assert.equal(caseBreadcrumbs(reviewCase, "https://example.org"), undefined);
  assert.equal(caseBreadcrumbs(fixture(), ""), undefined);
  const schema = caseBreadcrumbs(fixture(), "https://example.org")!;
  assert.equal(
    schema.itemListElement[2].item,
    "https://example.org/work/synthetic-case",
  );
  assert.equal(JSON.stringify(schema).includes("aggregateRating"), false);
});
