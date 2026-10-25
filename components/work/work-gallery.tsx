"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { workCategories, type WorkCategory } from "@/content/case-studies";
import type { WorkCardData } from "@/lib/work";
import { filterWork } from "@/lib/work-filter";
import { AssetPlaceholder, Eyebrow } from "@/components/ui/primitives";
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
          <div className="work-card-grid">
            {visible.map((entry) => (
              <article key={entry.slug} className="work-card">
                {entry.image ? (
                  <Image
                    src={entry.image.src}
                    alt={entry.image.alt}
                    width={720}
                    height={450}
                    sizes="(max-width: 600px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  />
                ) : (
                  <AssetPlaceholder
                    label="Approved project image required"
                    image={
                      entry.category === "Strategy"
                        ? "workshop"
                        : entry.category === "Compliance"
                          ? "headphones"
                          : "laptop"
                    }
                  />
                )}
                <Eyebrow>{entry.category}</Eyebrow>
                <h2>
                  <Link href={entry.href}>{entry.title}</Link>
                </h2>
                <p>{entry.summary}</p>
                <Link
                  className="work-card-arrow"
                  href={entry.href}
                  aria-label={`${review ? "Review layout" : "Read case study"}: ${entry.title}`}
                >
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="work-empty">
            <Eyebrow>Portfolio in preparation</Eyebrow>
            <h2>
              {category === "All"
                ? "Case studies are being prepared."
                : "No approved case studies in this category yet."}
            </h2>
            <p>
              Project stories and imagery will appear here once their
              publication permissions and delivery attribution are confirmed.
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
