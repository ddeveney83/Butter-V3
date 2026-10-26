import { test } from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { caseStudies } from "../content/case-studies";
import { isPublishableCase, publishedCases, caseCard } from "../lib/work";

test("owner portfolio migration retains all sixteen stories, genuine media, source reporting and Butter attribution", () => {
  assert.equal(publishedCases().length, 16);
  assert.equal(new Set(caseStudies.map((entry) => entry.slug)).size, 16);
  assert.equal(caseStudies.filter((entry) => entry.hero).length, 16);
  assert.equal(caseStudies.filter((entry) => entry.pendingMedia).length, 0);
  for (const entry of caseStudies) {
    assert.equal(entry.role.kind, "butter");
    assert.ok(entry.role.description.includes("Butter"));
    assert.equal(entry.source?.liveVerified, true);
    assert.equal(entry.story?.length, 3);
    assert.ok(entry.approval.portfolioReuse);
    assert.equal(entry.approval.clientPermission, ""); // No separate client permission is invented.
    const card = caseCard(entry);
    assert.equal("approval" in card, false);
    assert.equal("source" in card, false);
    if (entry.pendingMedia) assert.equal(entry.card?.screen, null);
    for (const image of [entry.hero, ...entry.gallery].filter(
      (value) => value !== null,
    ))
      assert.ok(readFileSync(`public${image.src}`).length > 0);
  }
  const security = caseStudies.find(
    (entry) => entry.slug === "information-security",
  )!;
  assert.ok(
    security.outcomeNarrative.includes(
      "increase in security incident reporting",
    ),
  );
  assert.equal(
    security.outcomeNarrative.includes("reduction in incidents"),
    false,
  );
  const academy = caseStudies.find(
    (entry) => entry.slug === "nansen-learning-academy",
  )!;
  assert.ok(academy.outcomeNarrative.includes("among academy learners"));
  assert.equal(
    caseStudies.find((entry) => entry.slug === "your-learning-platform")!
      .videos!.length,
    0,
  );
});
test("source reuse and explicit image reservations cannot silently bypass publication validation", () => {
  const entry = structuredClone(caseStudies[0]);
  entry.hero = null;
  entry.pendingMedia = {
    notice: "Original imagery pending",
    approval: "Owner-approved media reservation",
  };
  assert.equal(isPublishableCase(entry), true);
  const noApproval = structuredClone(entry);
  noApproval.pendingMedia!.approval = "";
  assert.equal(isPublishableCase(noApproval), false);
  const noNotice = structuredClone(entry);
  noNotice.pendingMedia!.notice = "";
  assert.equal(isPublishableCase(noNotice), false);
  const noSource = structuredClone(entry);
  noSource.source = undefined;
  assert.equal(isPublishableCase(noSource), false);
  const noReuse = structuredClone(entry);
  noReuse.approval.portfolioReuse = "";
  assert.equal(isPublishableCase(noReuse), false);
  const hostile = structuredClone(entry);
  hostile.source!.url = "https://outside.example/work";
  assert.equal(isPublishableCase(hostile), false);
  const fabricated = structuredClone(entry);
  fabricated.hero = {
    src: "/assets/placeholders/laptop-concept.png",
    alt: "Not real project media",
    rights: "Uncleared",
  };
  assert.equal(isPublishableCase(fabricated), false);
});
test("all sixty-three locally hosted original images match their recorded source hashes", () => {
  const ledger = JSON.parse(
    readFileSync("docs/portfolio-migration.json", "utf8"),
  ) as { images: { path: string; sha256: string }[] };
  assert.equal(ledger.images.length, 63);
  for (const image of ledger.images)
    assert.equal(
      createHash("sha256")
        .update(readFileSync(`public${image.path}`))
        .digest("hex"),
      image.sha256,
    );
});
