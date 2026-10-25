import { test } from "node:test";
import assert from "node:assert/strict";
import { insights, type Insight } from "../content/insights";
import {
  isPublishableInsight,
  publishedInsights,
  findPublishedInsight,
  insightStructuredData,
  insightCard,
  safeSourceUrl,
} from "../lib/insights";

function fixture(): Insight {
  // Synthetic approvals/media only. Never inserted into the real collection.
  return {
    ...structuredClone(insights[0]),
    status: "published",
    publishedOn: "2026-10-25",
    approval: { owner: "Test approval", author: "Test byline approval" },
    author: {
      name: "Synthetic author",
      biography: "Synthetic author background",
      approval: "Test biography approval",
    },
    image: {
      src: "/assets/insights/test.jpg",
      alt: "Synthetic image",
      rights: "Test rights",
    },
  };
}
test("articles fail closed without publication, author, dates, sources and cleared imagery", () => {
  assert.equal(publishedInsights().length, 2);
  assert.equal(
    findPublishedInsight(insights[0].slug)?.title,
    insights[0].title,
  );
  assert.equal(isPublishableInsight(fixture()), true);
  const labelled = structuredClone(insights[0]);
  assert.equal(isPublishableInsight(labelled), true);
  labelled.image!.src = "/assets/placeholders/unapproved.png";
  assert.equal(isPublishableInsight(labelled), false);
  labelled.image = { ...insights[0].image!, temporary: undefined };
  assert.equal(isPublishableInsight(labelled), false);
  const mutations: ((entry: Insight) => void)[] = [
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
      entry.approval.author = "";
    },
    (entry) => {
      entry.author.approval = "";
    },
    (entry) => {
      entry.author.biography = "";
    },
    (entry) => {
      entry.publishedOn = undefined;
    },
    (entry) => {
      entry.publishedOn = "2999-01-01";
    },
    (entry) => {
      entry.publishedOn = "2026-02-30";
    },
    (entry) => {
      entry.updatedOn = "2026-10-24";
    },
    (entry) => {
      entry.updatedOn = "2999-01-01";
    },
    (entry) => {
      entry.image = null;
    },
    (entry) => {
      entry.image!.src = "/assets/placeholders/laptop-concept.png";
    },
    (entry) => {
      entry.image!.src = "/assets/insights/../private.jpg";
    },
    (entry) => {
      entry.image!.src = "/assets/insights/%2e%2e/private.jpg";
    },
    (entry) => {
      entry.image!.rights = "";
    },
    (entry) => {
      entry.sources = [];
    },
    (entry) => {
      entry.sources[0].url = "javascript:alert(1)";
    },
    (entry) => {
      entry.sections[0].sourceIds = ["missing-source"];
    },
    (entry) => {
      entry.sections.push(entry.sections[0]);
    },
    (entry) => {
      entry.sections = [];
    },
    (entry) => {
      entry.serviceSlugs = ["invented-service"];
    },
  ];
  for (const mutate of mutations) {
    const entry = fixture();
    mutate(entry);
    assert.equal(isPublishableInsight(entry), false);
  }
  assert.equal(publishedInsights([fixture(), ...insights]).length, 3);
  assert.equal(safeSourceUrl("https://user:secret@example.org"), false);
});
test("Article and breadcrumbs match visible approved content and never mark up drafts", () => {
  assert.deepEqual(
    insightStructuredData(
      { ...insights[0], status: "draft" },
      "https://example.org",
    ),
    [],
  );
  assert.deepEqual(insightStructuredData(fixture(), ""), []);
  const [article, breadcrumbs] = insightStructuredData(
    fixture(),
    "https://example.org",
  );
  assert.equal(article["@type"], "Article");
  assert.ok("datePublished" in article);
  assert.ok("author" in article);
  assert.ok("mainEntityOfPage" in article);
  assert.equal(article.datePublished, "2026-10-25");
  assert.equal(article.author?.name, "Synthetic author");
  assert.equal(
    article.mainEntityOfPage,
    "https://example.org/insights/choosing-an-lms-for-your-organisation",
  );
  assert.equal(breadcrumbs.itemListElement?.length, 3);
  assert.equal("dateModified" in article, false);
  const modified = fixture();
  modified.updatedOn = "2026-10-25";
  const updated = insightStructuredData(modified, "https://example.org")[0];
  assert.ok("dateModified" in updated);
  assert.equal(updated.dateModified, "2026-10-25");
  const card = insightCard(insights[0], true);
  assert.equal(card.href, `/review/insights/${insights[0].slug}`);
  assert.equal("approval" in card, false);
  assert.equal("author" in card, false);
});
