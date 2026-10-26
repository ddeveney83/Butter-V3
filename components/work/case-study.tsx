import Link from "next/link";
import Image from "next/image";
import {
  Check,
  Users,
  CheckCircle,
  Presentation,
  ChartNoAxesColumnIncreasing,
  ImageOff,
} from "lucide-react";
import type { CaseStudy } from "@/content/case-studies";
import { services } from "@/content/services";
import { ActionLink, BottomCTA, Eyebrow } from "@/components/ui/primitives";
function ProjectImage({
  image,
  label,
  className = "",
  preload = false,
}: {
  image: CaseStudy["hero"];
  label: string;
  className?: string;
  preload?: boolean;
}) {
  return image ? (
    <Image
      className={className}
      src={image.src}
      alt={image.alt}
      width={1200}
      height={800}
      sizes="(max-width: 767px) 100vw, 60vw"
      preload={preload}
    />
  ) : (
    <div className={`project-media-pending ${className}`} role="note">
      <ImageOff aria-hidden="true" size={34} />
      <p>Original project imagery is being prepared.</p>
      <small>
        {label}. No substitute is presented as a real project screenshot.
      </small>
    </div>
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
    <article
      className={`case-layout${!review && study.slug === "information-security" ? " case-spacing-review" : ""}`}
      aria-labelledby={headingId}
    >
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
            {review
              ? "Attribution required"
              : "Designed and delivered by Butter."}
          </p>
          <ActionLink href="/contact" variant="pill">
            Discuss a similar challenge
          </ActionLink>
        </div>
        <ProjectImage
          image={study.hero}
          label={
            review
              ? "Case study hero layout"
              : `${study.title} project overview`
          }
          preload
        />
      </section>
      {study.pendingMedia && (
        <div className="shell case-media-notice">
          <p>{study.pendingMedia.notice}</p>
        </div>
      )}
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
      {study.story && (
        <section className="case-story shell" aria-label="Project story">
          {study.story.map((section) => (
            <section key={section.title} className="case-story-section">
              <div>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.image && (
                <ProjectImage image={section.image} label={section.title} />
              )}
            </section>
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
      {study.videos && study.videos.length > 0 && (
        <section className="case-films shell" aria-labelledby="film-title">
          <Eyebrow>See the work</Eyebrow>
          <h2 id="film-title">Original project film.</h2>
          <p>
            Watch the project film on YouTube. The player opens only when you
            follow the link.
          </p>
          {study.videos.map((video) => (
            <ActionLink
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
            >
              {video.title}
            </ActionLink>
          ))}
        </section>
      )}
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
