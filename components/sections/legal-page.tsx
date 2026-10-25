import { ActionLink, Eyebrow } from "@/components/ui/primitives";
import { legalDocuments } from "@/content/legal";
export function LegalPage({ kind }: { kind: "privacy" | "terms" }) {
  const doc = legalDocuments[kind];
  return (
    <main id="main" className="legal-page shell" tabIndex={-1}>
      <div className="legal-reading">
        <Eyebrow>Butter / Website information</Eyebrow>
        <h1>{doc.title}</h1>
        <div className="legal-draft" role="note">
          <strong>Draft for review · LEGAL COPY REQUIRED</strong>
          <p>
            Trading identity, hosting and operating details are pending. This
            document is not final or legally reviewed. Online enquiry delivery
            is not connected.
          </p>
        </div>
        {doc.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
        {kind === "privacy" && (
          <p>
            <ActionLink href="https://ico.org.uk/make-a-complaint/">
              Information Commissioner’s Office
            </ActionLink>
          </p>
        )}
        <div className="hero-actions">
          <ActionLink href="/contact">Contact Butter</ActionLink>
          <ActionLink href={kind === "privacy" ? "/terms" : "/privacy"}>
            {kind === "privacy" ? "Website terms" : "Privacy notice"}
          </ActionLink>
        </div>
      </div>
    </main>
  );
}
