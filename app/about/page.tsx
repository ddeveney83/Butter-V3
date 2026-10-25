import Image from "next/image";
import { UserRound, Plus } from "lucide-react";
import { aboutContent, founderIdentity } from "@/content/about";
import { services } from "@/content/services";
import { approvedFounder, aboutStructuredData } from "@/lib/about";
import { findRoute } from "@/content/routes";
import { routeMetadata } from "@/lib/seo";
import {
  ActionLink,
  AssetPlaceholder,
  BottomCTA,
  Eyebrow,
} from "@/components/ui/primitives";
import { ProcessSteps } from "@/components/sections/service-sections";
export const metadata = {
  ...routeMetadata(findRoute("/about")!),
  title: "About Butter | Independent digital learning studio in Devon",
  description:
    "Meet Butter’s approach to learning design: an independent Devon-based studio combining strategy, design and technology for the South West and UK-wide.",
};
export default function About() {
  const founder = approvedFounder();
  const schema = aboutStructuredData(findRoute("/about")!.status);
  return (
    <main id="main" className="about-page" tabIndex={-1}>
      {schema.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\u003c"),
          }}
        />
      )}
      <section className="about-hero shell" aria-labelledby="about-title">
        <div>
          <Eyebrow>About Butter / Independent digital learning studio</Eyebrow>
          <h1 id="about-title">
            Independent
            <br />
            thinking.
            <br />
            <span className="highlight">Better learning.</span>
          </h1>
          <p>
            Butter is an independent digital learning studio based in Devon.
            Learning strategy, design and technology come together to make
            complex learning challenges clearer.
          </p>
          <div className="hero-actions">
            <ActionLink href="/contact" variant="pill">
              Let’s talk
            </ActionLink>
            <ActionLink href="/services">Explore our services</ActionLink>
          </div>
        </div>
        <div className="about-hero-art">
          <Plus aria-hidden="true" size={50} strokeWidth={1} />
          <AssetPlaceholder
            label="Temporary ribbon composition for About; official artwork required"
            image="ribbon"
            preload
          />
        </div>
      </section>
      <section className="about-story shell" aria-labelledby="studio-title">
        <div>
          <Eyebrow>The studio</Eyebrow>
          <h2 id="studio-title">
            Better learning.
            <br />
            By design.
          </h2>
        </div>
        <div>
          <p className="about-lead">
            Good learning starts with understanding the people, the problem and
            the change you want to make.
          </p>
          <p>
            Butter brings together learning strategy, instructional design,
            development and technology. The offer spans bespoke eLearning,
            learning platforms, consultancy and ongoing support, with the
            approach shaped around the brief.
          </p>
          <p>
            That means asking useful questions before choosing a tool, making
            complex material easier to work with and treating accessibility as
            part of the design.
          </p>
          <ActionLink href="/work">Explore the Work page</ActionLink>
        </div>
      </section>
      <section
        className="about-principles shell"
        aria-labelledby="principles-title"
      >
        <div>
          <Eyebrow>What guides the work</Eyebrow>
          <h2 id="principles-title">
            Thoughtful choices.
            <br />
            Practical purpose.
          </h2>
          <p>Five principles drawn from Butter’s learning approach.</p>
        </div>
        <ol>
          {aboutContent.principles.map((principle, index) => (
            <li key={principle.title}>
              <span className="principle-number" aria-hidden="true">
                0{index + 1}
              </span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section
        className="about-location wide-shell"
        aria-labelledby="location-title"
      >
        <div>
          <Eyebrow>Devon / South West / UK-wide</Eyebrow>
          <h2 id="location-title">
            Based in Devon.
            <br />
            Open to what’s next.
          </h2>
          <p>
            Devon is Butter’s base, with an initial focus on organisations in
            the South West and an offer that welcomes UK-wide remote
            commissions.
          </p>
          <p>
            Tell us about your audience, challenge and working arrangements. The
            right approach starts with that conversation.
          </p>
          <ActionLink href="/contact" variant="pill">
            Discuss your learning challenge
          </ActionLink>
        </div>
        <AssetPlaceholder
          label="Illustrative working session, not a photograph of Butter staff or a real Devon client"
          image="workshop"
        />
      </section>
      <section
        className="process-section shell about-process"
        aria-labelledby="working-title"
      >
        <div>
          <Eyebrow>Working together</Eyebrow>
          <h2 id="working-title">
            A clear brief.
            <br />A considered
            <br />
            response.
          </h2>
        </div>
        <ProcessSteps steps={aboutContent.workingStyle} />
      </section>
      <section className="about-founder shell" aria-labelledby="founder-title">
        {founder ? (
          <>
            <div>
              <Eyebrow>Behind Butter</Eyebrow>
              <h2 id="founder-title">{founder.name}</h2>
              <p className="about-lead">{founder.role}</p>
              {founder.biography.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {founder.credentials.length > 0 && (
                <ul>
                  {founder.credentials.map((credential) => (
                    <li key={credential}>{credential}</li>
                  ))}
                </ul>
              )}
            </div>
            <Image
              src={founder.portrait.src}
              alt={founder.portrait.alt}
              width={800}
              height={900}
              sizes="(max-width: 767px) 100vw, 40vw"
            />
          </>
        ) : (
          <>
            <div>
              <Eyebrow>Behind Butter / Founder</Eyebrow>
              <h2 id="founder-title">{founderIdentity.name}</h2>
              <p className="about-lead">{founderIdentity.role}</p>
              <p>
                Founder biography, experience and portrait are awaiting
                approval. This section will introduce the real person and their
                background once those details are supplied.
              </p>
              <p className="approval-note">Development content reservation</p>
            </div>
            <div
              className="founder-reservation"
              aria-label="Founder portrait pending"
            >
              <UserRound aria-hidden="true" size={56} strokeWidth={1} />
              <p>Approved founder portrait required</p>
              <small>No generated person stands in for the founder.</small>
            </div>
          </>
        )}
      </section>
      <section
        className="about-offerings shell"
        aria-labelledby="offerings-title"
      >
        <div>
          <Eyebrow>How Butter can help</Eyebrow>
          <h2 id="offerings-title">
            The right support
            <br />
            for your next step.
          </h2>
        </div>
        <nav aria-label="Butter services">
          {services.map((service) => (
            <ActionLink key={service.slug} href={`/services/${service.slug}`}>
              {service.title}
            </ActionLink>
          ))}
        </nav>
      </section>
      <BottomCTA heading="Let’s make learning matter." />
    </main>
  );
}
