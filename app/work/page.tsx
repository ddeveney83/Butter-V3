import { Plus } from "lucide-react";
import {
  ActionLink,
  AssetPlaceholder,
  BottomCTA,
  Eyebrow,
} from "@/components/ui/primitives";
import { WorkGallery } from "@/components/work/work-gallery";
import { publishedCases, caseCard } from "@/lib/work";
import { routeMetadata } from "@/lib/seo";
import { findRoute } from "@/content/routes";
export const metadata = {
  ...routeMetadata(findRoute("/work")!),
  title: "Digital learning work and case studies | Butter",
  description:
    "Explore Butter’s digital learning approach through project stories published only with approved evidence and delivery attribution.",
};
export default function Work() {
  const entries = publishedCases().map(caseCard);
  return (
    <main id="main" className="work-page" tabIndex={-1}>
      <section className="work-hero shell">
        <div>
          <Eyebrow>Our work</Eyebrow>
          <h1>
            Real challenges.
            <br />
            <span className="highlight">Meaningful results.</span>
          </h1>
          <p>
            Learning design starts with a real problem. This portfolio will
            bring together project stories with clear scope, honest attribution
            and evidence.
          </p>
          <ActionLink href="/contact" variant="pill">
            Start a project
          </ActionLink>
        </div>
        <div className="work-hero-art">
          <Plus size={50} strokeWidth={1} aria-hidden="true" />
          <AssetPlaceholder
            label="Original cropped butter-yellow ribbon"
            image="ribbon"
          />
        </div>
      </section>
      <WorkGallery entries={entries} />
      {entries.length === 0 && (
        <section
          className="temporary-work-preview shell"
          aria-labelledby="temporary-work-heading"
        >
          <Eyebrow>Temporary image preview</Eyebrow>
          <h2 id="temporary-work-heading">A feel for the imagery.</h2>
          <p>
            Illustrative concepts to help review the layout. These are not
            client projects or portfolio evidence.
          </p>
          <div className="three-grid">
            {(["laptop", "workshop", "headphones"] as const).map((image) => (
              <AssetPlaceholder
                key={image}
                label="Temporary portfolio composition study, not real work"
                image={image}
              />
            ))}
          </div>
        </section>
      )}

      <section className="work-partnership wide-shell">
        <div>
          <Eyebrow>A partner throughout</Eyebrow>
          <h2>
            More than projects.
            <br />
            Long-term partnerships.
          </h2>
          <p>
            From learning strategy to design, platforms and ongoing support,
            explore the kind of help that fits your challenge.
          </p>
          <ActionLink href="/services">Explore our services</ActionLink>
        </div>
        <AssetPlaceholder
          label="Approved collaboration photograph"
          image="workshop"
        />
      </section>
      <BottomCTA heading="Let’s make learning happen." />
    </main>
  );
}
