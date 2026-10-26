import Image from "next/image";
import Link from "next/link";
import type { Insight } from "@/content/insights";
import { services } from "@/content/services";
import { insightCard, insightStructuredData } from "@/lib/insights";
import { formatArticleDate } from "@/lib/insight-display";
import { canonicalOrigin } from "@/lib/site-config";
import {
  ActionLink,
  AssetPlaceholder,
  BottomCTA,
  Eyebrow,
} from "@/components/ui/primitives";
import { InsightCards } from "./insight-cards";

export function ArticleLayout({
  entry,
  related,
  review = false,
}: {
  entry: Insight;
  related: Insight[];
  review?: boolean;
}) {
  const date = review ? entry.preparedOn : entry.publishedOn;
  const origin = review ? undefined : canonicalOrigin();
  const schema = review ? [] : insightStructuredData(entry, origin);
  return (
    <main id="main" className="insight-article" tabIndex={-1}>
      {schema.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <article>
        <header className="article-header shell">
          <Link
            className="text-link"
            href={review ? "/review/insights" : "/insights"}
          >
            ← {review ? "All draft insights" : "All insights"}
          </Link>
          {review && (
            <div className="insight-review-notice">
              <strong>Draft for review · Not published</strong>
              <p>
                AI-assisted editorial draft. This copy has not been approved or
                byline. Temporary imagery is for layout review only.
              </p>
            </div>
          )}
          <Eyebrow>{entry.category}</Eyebrow>
          <h1>{entry.title}</h1>
          <p className="article-standfirst">{entry.summary}</p>
          <div className="article-byline">
            <p>
              {review ? "Proposed author: " : "By "}
              <Link href="/about">{entry.author.name}</Link>
              {review && " · approval pending"}
            </p>
            {date && (
              <p>
                {review ? "Draft prepared " : "Published "}
                <time dateTime={date}>{formatArticleDate(date)}</time>
              </p>
            )}
            {!review && entry.updatedOn && (
              <p>
                Updated{" "}
                <time dateTime={entry.updatedOn}>
                  {formatArticleDate(entry.updatedOn)}
                </time>
              </p>
            )}
            {origin && (
              <a
                href={`${origin}/insights/${entry.slug}`}
                className="text-link"
              >
                Article permalink
              </a>
            )}
          </div>
          {entry.image && !entry.image.temporary ? (
            <Image
              className="article-hero-image"
              src={entry.image.src}
              alt={entry.image.alt}
              width={1400}
              height={700}
              sizes="100vw"
              preload
            />
          ) : (
            <AssetPlaceholder
              image={entry.image?.temporary ?? entry.reviewImage}
              label="Article thumbnail concept; approved editorial image required"
              preload
            />
          )}
        </header>
        <div className="article-reading-layout shell">
          <nav className="article-contents" aria-label="In this article">
            <p className="eyebrow">In this article</p>
            <ol>
              {entry.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>
                    {section.title.replace(/^\d+\. /, "")}
                  </a>
                </li>
              ))}
            </ol>
            <a href="#sources">Sources and scope</a>
          </nav>
          <div className="article-body">
            <section className="article-answer" aria-labelledby="answer-title">
              <h2 id="answer-title">The starting point</h2>
              <p>{entry.answer}</p>
            </section>
            {entry.sections.map((section) => (
              <section
                id={section.id}
                key={section.id}
                aria-labelledby={`${section.id}-title`}
              >
                <h2 id={`${section.id}-title`}>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items && (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.sourceIds && (
                  <p className="article-citations">
                    Reference:{" "}
                    {section.sourceIds.map((id, index) => (
                      <span key={id}>
                        {index > 0 && "; "}
                        <a href={`#source-${id}`}>
                          {
                            entry.sources.find((source) => source.id === id)!
                              .title
                          }
                        </a>
                      </span>
                    ))}
                  </p>
                )}
              </section>
            ))}
            <section id="sources" aria-labelledby="sources-title">
              <h2 id="sources-title">Sources and scope</h2>
              <p>
                External references support the points identified above.
                Practical recommendations are editorial guidance, not evidence
                of a particular client outcome or a guarantee of compliance.
              </p>
              <ol className="article-sources">
                {entry.sources.map((source) => (
                  <li id={`source-${source.id}`} key={source.id}>
                    <a href={source.url}>{source.title}</a>
                    <p>{source.context}</p>
                  </li>
                ))}
              </ol>
            </section>
            <aside className="article-author" aria-label="Article author">
              <h2>{review ? "Proposed author" : "About Butter"}</h2>
              <p>
                <strong>{entry.author.name}</strong>
              </p>
              <p>{entry.author.biography}</p>
              {review && (
                <p className="approval-note">
                  Studio author summary; wording and attribution require
                  approval.
                </p>
              )}
              <ActionLink href="/about">About Butter</ActionLink>
            </aside>
          </div>
        </div>
      </article>
      <section
        className="article-services shell"
        aria-labelledby="article-services-title"
      >
        <Eyebrow>Put the thinking to work</Eyebrow>
        <h2 id="article-services-title">Support for your next step.</h2>
        <nav aria-label="Related services">
          {services
            .filter((service) => entry.serviceSlugs.includes(service.slug))
            .map((service) => (
              <ActionLink key={service.slug} href={`/services/${service.slug}`}>
                {service.title}
              </ActionLink>
            ))}
          <ActionLink href="/work">Explore Work</ActionLink>
        </nav>
      </section>
      {related.length > 0 && (
        <section
          className="article-related shell"
          aria-labelledby="related-title"
        >
          <Eyebrow>Keep exploring</Eyebrow>
          <h2 id="related-title">Related {review ? "drafts" : "insights"}.</h2>
          <InsightCards
            entries={related.map((item) => insightCard(item, review))}
            review={review}
            related
          />
        </section>
      )}
      <BottomCTA />
    </main>
  );
}
