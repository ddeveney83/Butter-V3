import type { Insight } from "@/content/insights";
import { insightCard } from "@/lib/insights";
import {
  AssetPlaceholder,
  ActionLink,
  BottomCTA,
  Eyebrow,
} from "@/components/ui/primitives";
import { InsightsGallery } from "./insights-gallery";
export function InsightsHub({
  entries,
  review = false,
}: {
  entries: Insight[];
  review?: boolean;
}) {
  return (
    <main id="main" className="insights-page" tabIndex={-1}>
      {review && (
        <div className="shell insight-review-notice">
          <strong>Editorial review only</strong>
          <p>
            AI-assisted drafts prepared for Daniel Deveney. Copy, authorship and
            imagery await approval. These are not published articles. This
            review route is disabled by default.
          </p>
        </div>
      )}
      <section className="insights-hero shell" aria-labelledby="insights-title">
        <div>
          <Eyebrow>Insights / Learning by design</Eyebrow>
          <h1 id="insights-title">
            Ideas, insights
            <br />
            and <span className="highlight">practical advice.</span>
          </h1>
          <p>
            Considered guidance on learning design, platforms and accessibility.
            Useful questions, clear explanations and practical next steps.
          </p>
          <ActionLink href="/contact" variant="pill">
            Discuss your learning challenge
          </ActionLink>
        </div>
        <AssetPlaceholder
          image="ribbon"
          label="Editorial ribbon concept; original artwork required"
          preload
        />
      </section>
      <InsightsGallery
        entries={entries.map((entry) => insightCard(entry, review))}
        review={review}
      />
      <section className="insights-context shell">
        <Eyebrow>Devon / South West / UK-wide</Eyebrow>
        <h2>
          From a useful question
          <br />
          to a clearer brief.
        </h2>
        <p>
          Butter is an independent digital learning studio based in Devon,
          working with organisations across the South West and UK-wide. Explore
          the studio’s approach or talk through what your learners need.
        </p>
        <div className="hero-actions">
          <ActionLink href="/about">About Butter</ActionLink>
          <ActionLink href="/work">Explore Work</ActionLink>
        </div>
      </section>
      <BottomCTA />
    </main>
  );
}
