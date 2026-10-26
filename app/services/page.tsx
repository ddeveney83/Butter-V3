import { serviceExample } from "@/lib/service-work";
import { ServiceProjectImage } from "@/components/sections/service-project-image";
import { Plus } from "lucide-react";
import { services, processSteps } from "@/content/services";
import { overviewFAQs } from "@/content/service-details";
import {
  ActionLink,
  AssetPlaceholder,
  BottomCTA,
  Eyebrow,
} from "@/components/ui/primitives";
import {
  ProcessSteps,
  FAQSection,
  serviceIcons,
} from "@/components/sections/service-sections";
import { findRoute } from "@/content/routes";
import { routeMetadata } from "@/lib/seo";
export const metadata = {
  ...routeMetadata(findRoute("/services")!),
  title: "Digital learning services | Butter",
  description:
    "Explore eLearning design, learning platforms, strategy and ongoing support from Butter, a Devon-based studio working across the South West and UK.",
};
export default function Services() {
  const partnershipWork = serviceExample("ongoing-learning-support");
  return (
    <main id="main" className="services-page" tabIndex={-1}>
      <section className="services-hero shell" aria-labelledby="services-title">
        <div>
          <Eyebrow>Our services</Eyebrow>
          <h1 id="services-title">
            End-to-end
            <br />
            learning solutions
            <br />
            for{" "}
            <span className="highlight">
              real-world
              <br />
              impact.
            </span>
          </h1>
        </div>
        <div className="overview-intro">
          <p>
            We design, develop and deliver digital learning experiences that
            make a difference. From bespoke eLearning and learning platforms to
            strategic advice, we help organisations turn learning needs into
            practical next steps.
          </p>
          <ActionLink href="/contact" variant="pill">
            Let’s discuss your needs
          </ActionLink>
          <p className="locality">
            Based in Devon. Working across the South West and UK-wide.
          </p>
        </div>
        <div className="overview-art">
          <Plus aria-hidden="true" strokeWidth={1} size={50} />
          <AssetPlaceholder
            label="Original cropped yellow ribbon artwork"
            image="ribbon"
          />
        </div>
      </section>
      <section
        className="services-catalog wide-shell"
        aria-label="Four learning services"
      >
        {services.map((service) => {
          const Icon = serviceIcons[service.icon];
          const example = serviceExample(service.slug);
          return (
            <article className="catalog-card" key={service.slug}>
              <div className="catalog-copy">
                <span className="icon-tile">
                  <Icon aria-hidden="true" size={30} strokeWidth={1.6} />
                </span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ActionLink href={`/services/${service.slug}`}>
                  Find out more
                  <span className="sr-only"> about {service.title}</span>
                </ActionLink>
              </div>
              {example && <ServiceProjectImage study={example} />}
            </article>
          );
        })}
      </section>
      <section
        className="partnership wide-shell"
        aria-labelledby="partner-title"
      >
        <div className="partnership-copy">
          <Eyebrow>A partner throughout</Eyebrow>
          <h2 id="partner-title">
            More than delivery.
            <br />A long-term partner.
          </h2>
          <p>
            Whether you need a single course, help with a learning platform or a
            practical learning strategy, we start with your people and the
            problem to solve.
          </p>
          <ActionLink href="/contact" variant="pill">
            Let’s talk about your goals
          </ActionLink>
        </div>
        {partnershipWork && (
          <ServiceProjectImage
            study={partnershipWork}
            image={partnershipWork.story?.[0]?.image ?? partnershipWork.hero}
          />
        )}
        <div className="keyword-rail" aria-hidden="true">
          Strategy
          <br />
          Design
          <br />
          Development
          <br />
          Support
          <hr />
          People
          <br />
          Ideas
          <br />
          Technology
          <br />
          Impact
        </div>
      </section>
      <section
        className="process-section shell"
        aria-labelledby="service-process-title"
      >
        <div>
          <Eyebrow>Our process</Eyebrow>
          <h2 id="service-process-title">
            A clear process
            <br />
            from insight
            <br />
            to impact.
          </h2>
        </div>
        <ProcessSteps steps={processSteps} />
      </section>
      <FAQSection items={overviewFAQs} />
      <BottomCTA heading="Let’s make learning happen." />
    </main>
  );
}
