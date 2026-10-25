"use client";
import { useState } from "react";
import { insightCategories } from "@/content/insights";
import type { InsightCardData } from "@/lib/insights";
import { InsightCards } from "./insight-cards";
import { ActionLink, Eyebrow } from "@/components/ui/primitives";

export function InsightsGallery({
  entries,
  review = false,
}: {
  entries: InsightCardData[];
  review?: boolean;
}) {
  const [category, setCategory] =
    useState<(typeof insightCategories)[number]>("All");
  const visible =
    category === "All"
      ? entries
      : entries.filter((entry) => entry.category === category);
  return (
    <section
      className="insights-gallery shell"
      aria-label={review ? "Draft articles for review" : "Articles"}
    >
      <div
        className="insight-filters"
        role="group"
        aria-label="Filter insights by topic"
      >
        {insightCategories.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={category === name}
            aria-controls="insight-results"
            onClick={() => setCategory(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <p
        className="insight-result-count"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {visible.length} {review ? "draft" : "published"}{" "}
        {visible.length === 1 ? "article" : "articles"}
        {category === "All" ? "" : ` in ${category}`}
      </p>
      <div id="insight-results">
        {visible.length ? (
          <InsightCards entries={visible} review={review} />
        ) : (
          <div className="insights-empty">
            <Eyebrow>
              {review ? "Review collection" : "Editorial in preparation"}
            </Eyebrow>
            <h2>
              {category === "All"
                ? "Good questions deserve considered answers."
                : "No articles in this topic yet."}
            </h2>
            <p>
              {review
                ? "Choose another topic to review the prepared drafts."
                : "Guides to learning design, platforms and accessibility will appear here after editorial and author approval."}
            </p>
            {category !== "All" && (
              <button
                type="button"
                className="text-link"
                onClick={() => setCategory("All")}
              >
                Show all insights
              </button>
            )}
            <ActionLink href="/services">Explore our services</ActionLink>
          </div>
        )}
      </div>
    </section>
  );
}
