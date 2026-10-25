import Link from "next/link";
import Image from "next/image";
import {
  Check,
  Users,
  CheckCircle,
  Presentation,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";
import type { CaseStudy } from "@/content/case-studies";
import { services } from "@/content/services";
import {
  ActionLink,
  AssetPlaceholder,
  BottomCTA,
  Eyebrow,
} from "@/components/ui/primitives";
function ProjectImage({
  image,
  label,
  className = "",
}: {
  image: CaseStudy["hero"];
  label: string;
  className?: string;
}) {
  return image ? (
    <Image
      className={className}
      src={image.src}
      alt={image.alt}
      width={1200}
      height={800}
      sizes="(max-width: 767px) 100vw, 60vw"
    />
  ) : (
    <AssetPlaceholder label={label} className={className} />
  );
}
export function CaseStudyLayout({
  study,
  review = false,
}: {
  study: CaseStudy;
  review?: boolean;
}) {
  const Title = review ? "h2" : "h1";
  const headingId = review ? "case-preview-title" : "case-title";
  const proofIcons = [
    Users,
    CheckCircle,
    Presentation,
    ChartNoAxesColumnIncreasing,
  ];
  return (
    <article className="case-layout" aria-labelledby={headingId}>
      <nav className="breadcrumbs shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/work">Work</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{study.title}</span>
      </nav>
      <section className="case-hero wide-shell">
        <div className="case-hero-copy">
          <Eyebrow>
            {review ? "Design review only" : `Case study / ${study.category}`}
          </Eyebrow>
          <Title id={headingId}>{study.title}</Title>
          <p className="case-headline">{study.headline}</p>
          <p>{study.introduction}</p>
          <p className="role-attribution">
            <strong>
              {review
                ? "Attribution required"
                : study.role.kind === "employment"
                  ? "Experience gained in employment"
                  : "Butter engagement"}
            </strong>
            <br />
            {study.role.description}
          </p>
          <ActionLink href="/contact" variant="pill">
            Discuss a similar challenge
          </ActionLink>
        </div>
        <ProjectImage
          image={study.hero}
          label="Approved project hero photograph"
        />
      </section>
      {(study.outcomes.length > 0 || review) && (
        <section
          className="case-proof wide-shell"
          aria-label="Project evidence"
        >
          {(review
            ? Array.from({ length: 4 }, (_, index) => ({
                value: "Evidence required",
                label: `Proof position ${index + 1}`,
                evidence: "",
              }))
            : study.outcomes
          ).map((outcome, index) => {
            const Icon = proofIcons[index % proofIcons.length];
            return (
              <div key={outcome.label}>
                <Icon aria-hidden="true" size={28} />
                <h3>{outcome.value}</h3>
                <p>{outcome.label}</p>
                {!review && <small>{outcome.evidence}</small>}
              </div>
            );
          })}
        </section>
      )}
      <section className="case-narrative shell">
        <div>
          <Eyebrow>The challenge</Eyebrow>
          <h2>{study.challenge.title}</h2>
          <p>{study.challenge.text}</p>
          <h3>Audience and context</h3>
          <p>{study.challenge.audience}</p>
          <h3>Constraints</h3>
          <p>{study.challenge.constraints}</p>
        </div>
        <aside className="case-requirements" aria-label="Key requirements">
          <Eyebrow>Key requirements</Eyebrow>
          <ul>
            {study.requirements.map((requirement) => (
              <li key={requirement}>
                <Check aria-hidden="true" size={18} />
                {requirement}
              </li>
            ))}
          </ul>
        </aside>
      </section>
      <section className="case-narrative case-approach shell">
        <div>
          <Eyebrow>Our approach</Eyebrow>
          <h2>{study.approach.title}</h2>
          <p>{study.approach.text}</p>
          <h3>Design decision</h3>
          <p>{study.approach.designDecision}</p>
        </div>
        <aside aria-label="What was delivered">
          <Eyebrow>What we delivered</Eyebrow>
          <ul className="case-deliverables">
            {study.deliverables.map((item) => (
              <li key={item}>
                <Presentation size={24} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </section>
      {(study.gallery.length > 0 || review) && (
        <section className="case-gallery shell" aria-label="Project gallery">
          {(review ? [null, null] : study.gallery).map((image, index) => (
            <ProjectImage
              key={image?.src ?? index}
              image={image}
              label={`Approved interface or device screenshot ${index + 1}`}
            />
          ))}
        </section>
      )}
      <section className="case-outcome shell">
        <Eyebrow>Outcomes and evidence</Eyebrow>
        <h2>What changed, and how we know.</h2>
        <p>{study.outcomeNarrative}</p>
        {!review && (
          <ul>
            {study.evidence.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </section>
      <nav className="case-services shell" aria-label="Related services">
        <Eyebrow>Related services</Eyebrow>
        {study.serviceSlugs.map((slug) => {
          const service = services.find((entry) => entry.slug === slug);
          return (
            service && (
              <ActionLink key={slug} href={`/services/${slug}`}>
                {service.title}
              </ActionLink>
            )
          );
        })}
      </nav>
      <BottomCTA heading="Let’s discuss your learning challenge." />
    </article>
  );
}
