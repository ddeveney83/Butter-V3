import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { WorkCardData } from "@/lib/work";
import { ProjectArtwork } from "./project-artwork";
export function WorkCards({
  entries,
  review = false,
  headingLevel = 2,
}: {
  entries: WorkCardData[];
  review?: boolean;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="work-card-grid">
      {entries.map((entry) => (
        <article key={entry.slug} className="work-card">
          <Link
            href={entry.href}
            className="project-card-link"
            aria-label={`${review ? "Review layout" : "Read case study"}: ${entry.title}`}
          >
            <ProjectArtwork
              image={entry.image}
              presentation={entry.presentation}
              title={entry.title}
            />
            <div className="project-card-heading">
              <Heading>{entry.title}</Heading>
              <ArrowUpRight aria-hidden="true" size={27} strokeWidth={1.5} />
            </div>
            <p className="project-card-meta">
              {entry.organisation ? `${entry.organisation} · ` : ""}
              {entry.discipline ?? entry.category}
            </p>
          </Link>
        </article>
      ))}
    </div>
  );
}
