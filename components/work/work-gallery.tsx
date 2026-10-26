"use client";
import { useState } from "react";
import Link from "next/link";
import { workCategories, type WorkCategory } from "@/content/work-categories";
import type { WorkCardData } from "@/lib/work";
import { filterWork } from "@/lib/work-filter";
import { Eyebrow } from "@/components/ui/primitives";
import { WorkCards } from "./work-cards";
export function WorkGallery({
  entries,
  review = false,
}: {
  entries: WorkCardData[];
  review?: boolean;
}) {
  const [category, setCategory] = useState<WorkCategory | "All">("All");
  const visible = filterWork(entries, category);
  return (
    <section
      className="work-gallery shell"
      aria-label={review ? "Layout example gallery" : "Case studies"}
    >
      <div
        className="work-filters"
        role="group"
        aria-label="Filter work by category"
      >
        {workCategories.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={category === name}
            aria-controls="work-results"
            onClick={() => setCategory(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <p
        className="result-count"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {visible.length}{" "}
        {review
          ? visible.length === 1
            ? "layout example"
            : "layout examples"
          : visible.length === 1
            ? "case study"
            : "case studies"}
        {category === "All" ? "" : ` in ${category}`}
      </p>
      <div id="work-results">
        {visible.length ? (
          <WorkCards entries={visible} review={review} />
        ) : (
          <div className="work-empty">
            <Eyebrow>Portfolio</Eyebrow>
            <h2>
              {category === "All"
                ? "Case studies are being prepared."
                : "No approved case studies in this category yet."}
            </h2>
            <p>
              Explore another category or discuss the kind of support you need.
            </p>
            {category !== "All" && (
              <button
                className="text-link"
                type="button"
                onClick={() => setCategory("All")}
              >
                Show all work
              </button>
            )}
            <Link className="text-link" href="/services">
              Explore our services instead
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
