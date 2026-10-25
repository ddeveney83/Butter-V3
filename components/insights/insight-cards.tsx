import Image from "next/image";
import Link from "next/link";
import {
  ActionLink,
  AssetPlaceholder,
  Eyebrow,
} from "@/components/ui/primitives";
import type { InsightCardData } from "@/lib/insights";
import { formatArticleDate } from "@/lib/insight-display";

export function InsightCards({
  entries,
  review = false,
  related = false,
}: {
  entries: InsightCardData[];
  review?: boolean;
  related?: boolean;
}) {
  const Heading = related ? "h3" : "h2";
  return (
    <div className="insight-card-grid">
      {entries.map((entry) => (
        <article className="insight-card" key={entry.slug}>
          {entry.image && !entry.image.temporary ? (
            <Image
              src={entry.image.src}
              alt={entry.image.alt}
              width={720}
              height={450}
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            />
          ) : (
            <AssetPlaceholder
              image={entry.image?.temporary ?? entry.reviewImage}
              label="Temporary editorial illustration for review"
            />
          )}
          <Eyebrow>{entry.category}</Eyebrow>
          {entry.date && (
            <p className="insight-date">
              {review ? "Draft prepared " : "Published "}
              <time dateTime={entry.date}>{formatArticleDate(entry.date)}</time>
            </p>
          )}
          <Heading>
            <Link href={entry.href}>{entry.title}</Link>
          </Heading>
          <p>{entry.summary}</p>
          <ActionLink href={entry.href}>
            {review ? "Review draft" : "Read article"}
            <span className="sr-only">: {entry.title}</span>
          </ActionLink>
        </article>
      ))}
    </div>
  );
}
