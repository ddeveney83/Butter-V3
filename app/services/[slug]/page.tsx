import { serviceSchema } from "@/lib/service-schema";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Plus } from "lucide-react";
import { serviceDetails, findServiceDetail } from "@/content/service-details";
import {
  ActionLink,
  AssetPlaceholder,
  BottomCTA,
  Eyebrow,
} from "@/components/ui/primitives";
import {
  ProcessSteps,
  FAQSection,
  RelatedServices,
  benefitIcons,
  solutionIconsFor,
} from "@/components/sections/service-sections";
import { routeMetadata } from "@/lib/seo";
import { findRoute } from "@/content/routes";
import { publishedCases } from "@/lib/work";
import { ProjectArtwork } from "@/components/work/project-artwork";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({ params }: Props) {
  const service = findServiceDetail((await params).slug);
  if (!service) return {};
  return {
    ...routeMetadata(findRoute(`/services/${service.slug}`)!),
    title: `${service.title} | Butter`,
    description: service.description,
  };
}
export default async function ServicePage({ params }: Props) {
  const service = findServiceDetail((await params).slug);
  if (!service) notFound();
  const relatedWork = publishedCases().filter(
    (study) => study.hero && study.serviceSlugs.includes(service.slug),
  );
  const featuredWork =
    (service.slug === "elearning-design-development"
      ? relatedWork.find((study) => study.slug === "information-security")
      : undefined) ?? relatedWork[0];
  const schema = serviceSchema(
    service,
    findRoute(`/services/${service.slug}`)!.status,
  );
  return (
    <main id="main" className="service-detail" tabIndex={-1}>
      {schema.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <section className="detail-hero shell" aria-labelledby="detail-title">
        <div>
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{service.title}</span>
          </nav>
          <Eyebrow>Our services</Eyebrow>
          <h1 id="detail-title">
            {service.heading.map((line) => (
              <span className="heading-line" key={line}>
                {line}
              </span>
            ))}
            <span className="highlight">{service.highlight}</span>
          </h1>
          <p className="detail-description">{service.description}</p>
          <div className="hero-actions">
            <ActionLink
              href={`/contact?interest=${service.slug}`}
              variant="pill"
            >
              Start a project
            </ActionLink>
            <ActionLink href="#our-approach">
              Learn more about our approach
            </ActionLink>
          </div>
        </div>
        <div className="detail-art">
          <Plus aria-hidden="true" size={50} strokeWidth={1} />
          <AssetPlaceholder
            label={service.heroAsset}
            image={
              service.slug === "learning-strategy-consultancy" ||
              service.slug === "ongoing-learning-support"
                ? "workshop"
                : "laptop"
            }
          />
        </div>
      </section>
      <section
        className="benefit-band wide-shell"
        aria-label="Service benefits"
      >
        {service.benefits.map((benefit, index) => {
          const Icon = benefitIcons[index];
          return (
            <div key={benefit.title}>
              <span className="benefit-icon">
                <Icon aria-hidden="true" size={26} strokeWidth={1.6} />
              </span>
              <h2>{benefit.title}</h2>
              <p>{benefit.description}</p>
            </div>
          );
        })}
      </section>
      <section
        id="our-approach"
        className="detail-approach shell"
        aria-labelledby="approach-title"
      >
        <div className="approach-intro">
          <Eyebrow>How we help</Eyebrow>
          <h2 id="approach-title">
            From ideas
            <br />
            to lasting
            <br />
            impact.
          </h2>
          <p>{service.fit}</p>
          <ActionLink href={`/contact?interest=${service.slug}`} variant="pill">
            Discuss your learning need
          </ActionLink>
        </div>
        <div className="approach-main">
          <ProcessSteps steps={service.steps} />
          <div className="service-feature">
            {featuredWork ? (
              <>
                <ProjectArtwork
                  image={featuredWork.hero}
                  presentation={featuredWork.card}
                  title={featuredWork.title}
                />
                <div>
                  <Eyebrow>Featured Butter work</Eyebrow>
                  <h3>{featuredWork.title}</h3>
                  <p>{featuredWork.summary}</p>
                  <ActionLink href={`/work/${featuredWork.slug}`}>
                    Read the full case study
                  </ActionLink>
                </div>
              </>
            ) : (
              <>
                <AssetPlaceholder label="Approved service-related project imagery" />
                <div>
                  <Eyebrow>Featured work · approval pending</Eyebrow>
                  <h3>Evidence that tells the full story.</h3>
                  <p>
                    Project images, delivery scope and results will appear here
                    only with permission and verified attribution.
                  </p>
                  <ActionLink href="/work">Explore our work</ActionLink>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <section
        className="solutions-section shell"
        aria-labelledby="solutions-title"
      >
        <div>
          <Eyebrow>Ways we can help</Eyebrow>
          <h2 id="solutions-title">
            Flexible
            <br />
            solutions for
            <br />
            your needs.
          </h2>
          <p>
            Choose the support that fits the problem. Deliverables and
            responsibilities are agreed before work starts.
          </p>
        </div>
        <div className="solutions-grid">
          {service.solutions.map((solution, index) => {
            const Icon = solutionIconsFor(service.slug)[index];
            return (
              <article key={solution.title}>
                <Icon aria-hidden="true" size={28} strokeWidth={1.6} />
                <div>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="service-scope shell" aria-labelledby="scope-title">
        <h2 id="scope-title">A clear scope, from the start.</h2>
        <p>{service.boundary}</p>
      </section>
      <FAQSection items={service.faqs} split />
      <RelatedServices current={service.slug} />
      <BottomCTA heading="Let’s create something better." />
    </main>
  );
}
