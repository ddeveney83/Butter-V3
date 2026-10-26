import { Compass, Layers, Presentation, Users, ArrowRight } from "lucide-react";
import {
  ActionLink,
  AssetPlaceholder,
  BottomCTA,
  Eyebrow,
} from "@/components/ui/primitives";
import { services, processSteps } from "@/content/services";
import { routeMetadata } from "@/lib/seo";
import { routes } from "@/content/routes";
import { siteConfig } from "@/lib/site-config";
import { publishedInsights, insightCard } from "@/lib/insights";
import { InsightCards } from "@/components/insights/insight-cards";
import { WorkCards } from "@/components/work/work-cards";
import { publishedCases, caseCard } from "@/lib/work";

export const metadata = {
  ...routeMetadata(routes[0]),
  title: "Butter | Digital learning design studio in Devon",
  description: siteConfig.description,
};
const icons = {
  learning: Presentation,
  platform: Layers,
  strategy: Compass,
  support: Users,
};
export default function Home() {
  const articles = publishedInsights().slice(0, 3);
  const projects = publishedCases()
    .filter((study) => study.hero)
    .slice(0, 2);
  return (
    <main id="main" className="home" tabIndex={-1}>
      <section className="hero shell" aria-labelledby="home-heading">
        <div className="hero-copy">
          <Eyebrow>Independent digital learning studio / UK</Eyebrow>
          <h1 id="home-heading">
            Learning,
            <br />
            designed
            <br />
            to <span className="highlight">matter.</span>
          </h1>
          <p className="hero-description">
            We turn complex learning challenges into beautifully simple digital
            experiences. Strategy, design and technology — working together.
          </p>
          <div className="hero-actions">
            <ActionLink href="/contact" variant="pill">
              Start a project
            </ActionLink>
            <ActionLink href="/work">Explore our work</ActionLink>
          </div>
          <p className="locality">
            Based in Devon. Working across the South West and UK-wide.
          </p>
        </div>
        <div className="hero-art">
          <div className="cross-note" aria-hidden="true">
            <span>＋</span>
            <span>
              01 /<br />
              Thoughtful
              <br />
              by design
            </span>
          </div>
          <AssetPlaceholder
            label="Original curled butter-yellow ribbon artwork"
            image="ribbon"
            preload
            className="ribbon-gap"
          />
        </div>
      </section>
      <section
        className="trust-strip shell"
        aria-label="Client approvals pending"
      >
        <Eyebrow>Client / experience marks</Eyebrow>
        <p>
          Logo strip reserved. Client permissions and relationship attribution
          required before publication.
        </p>
      </section>
      <section
        className="services-panel wide-shell"
        aria-labelledby="services-heading"
      >
        <div className="section-top">
          <div>
            <Eyebrow>Our services</Eyebrow>
            <h2 id="services-heading">
              End-to-end
              <br />
              learning solutions
              <br />
              for real-world impact.
            </h2>
          </div>
          <ActionLink href="/services">Explore all services</ActionLink>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <article className="service-column" key={service.slug}>
                <Icon aria-hidden="true" size={40} strokeWidth={1.6} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ActionLink href={`/services/${service.slug}`}>
                  Find out more
                  <span className="sr-only"> about {service.title}</span>
                </ActionLink>
              </article>
            );
          })}
        </div>
      </section>
      <section className="work-section shell" aria-labelledby="work-heading">
        <div className="section-top">
          <div>
            <Eyebrow>Featured work</Eyebrow>
            <h2 id="work-heading">
              Real challenges.
              <br />
              Meaningful results.
            </h2>
          </div>
          <p className="section-intro">
            Selected projects from Daniel’s professional portfolio, with
            original imagery and clear delivery attribution.
          </p>
          <ActionLink href="/work">Explore all case studies</ActionLink>
        </div>
        <WorkCards entries={projects.map(caseCard)} headingLevel={3} />
      </section>
      <section
        className="process-section shell"
        aria-labelledby="process-heading"
      >
        <div>
          <Eyebrow>How we work</Eyebrow>
          <h2 id="process-heading">
            A simple
            <br />
            process.
            <br />
            Real progress.
          </h2>
        </div>
        <ol className="process-grid">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <div className="step-top">
                <span className="step-number">0{index + 1}</span>
                {index < 2 && <ArrowRight aria-hidden="true" />}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>
      <section
        className="proof-panel wide-shell"
        aria-label="Evidence approval pending"
      >
        <div className="proof-copy">
          <Eyebrow>Proof, with permission</Eyebrow>
          <h2>
            Real experience.
            <br />
            Honest evidence.
          </h2>
          <p>
            This space is reserved for an approved testimonial and attribution.
          </p>
          <span className="approval-note">
            No testimonial is published yet.
          </span>
        </div>
        <AssetPlaceholder
          label="Approved partnership photograph"
          image="workshop"
        />
        <div className="proof-metrics">
          <Eyebrow>Verified outcomes</Eyebrow>
          <p>
            Experience, learner reach and outcomes will be shown only when their
            evidence and attribution are confirmed.
          </p>
          <span className="approval-note">Metrics approval required</span>
        </div>
      </section>
      <section
        className="insights-section shell"
        aria-labelledby="insights-heading"
      >
        <div className="section-top">
          <div>
            <Eyebrow>Latest insights</Eyebrow>
            <h2 id="insights-heading">
              Ideas, insights
              <br />
              and practical advice.
            </h2>
          </div>
          <ActionLink href="/insights">Explore all insights</ActionLink>
        </div>
        {articles.length > 0 ? (
          <InsightCards
            entries={articles.map((entry) => insightCard(entry))}
            related
          />
        ) : (
          <div className="three-grid">
            {["Learning strategy", "Instructional design", "Accessibility"].map(
              (topic) => (
                <div key={topic}>
                  <AssetPlaceholder
                    label={`${topic} editorial imagery`}
                    image={
                      topic === "Accessibility"
                        ? "headphones"
                        : topic === "Learning strategy"
                          ? "ribbon"
                          : "workshop"
                    }
                    className="insight-image"
                  />
                  <Eyebrow>{topic}</Eyebrow>
                  <h3>Editorial content in preparation</h3>
                  <p className="approval-note">
                    No article published. Author, copy and sources require
                    approval.
                  </p>
                </div>
              ),
            )}
          </div>
        )}
      </section>
      <BottomCTA />
    </main>
  );
}
