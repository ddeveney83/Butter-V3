import { Plus } from "lucide-react";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { Eyebrow, ActionLink } from "@/components/ui/primitives";
import { contactConfig, publicContactEmail } from "@/lib/contact/config";
import { routeMetadata } from "@/lib/seo";
import { findRoute } from "@/content/routes";
export const dynamic = "force-dynamic";
export const metadata = {
  ...routeMetadata(findRoute("/contact")!),
  title: "Contact Butter | Start a digital learning project",
  description:
    "Talk to Butter about eLearning, learning platforms, strategy or ongoing support. Based in Devon, working across the South West and UK-wide.",
};
export default function ContactPage() {
  const email = publicContactEmail();
  return (
    <main id="main" className="contact-page" tabIndex={-1}>
      <section className="contact-hero shell">
        <div>
          <Eyebrow>Contact / Let’s talk</Eyebrow>
          <h1>
            Let’s start
            <br />a <span className="highlight">conversation.</span>
          </h1>
        </div>
        <div>
          <Plus size={48} strokeWidth={1} aria-hidden="true" />
          <p>
            Big project, small idea or somewhere in between. Tell us about your
            learning challenge and the support you’re looking for.
          </p>
          <p>
            Based in Devon, working with organisations across the South West and
            UK-wide.
          </p>
          {email && (
            <a className="text-link" href={`mailto:${email}`}>
              {email}
            </a>
          )}
        </div>
      </section>
      <section
        className="contact-content shell"
        aria-labelledby="enquiry-title"
      >
        <div>
          <Eyebrow>Your next step</Eyebrow>
          <h2 id="enquiry-title">
            Tell us what’s
            <br />
            on your mind.
          </h2>
          <EnquiryForm available={Boolean(contactConfig())} />
        </div>
        <aside className="contact-brief">
          <Eyebrow>A useful starting point</Eyebrow>
          <h2>
            A little context.
            <br />A clearer brief.
          </h2>
          <p>
            You don’t need a finished specification to start a conversation.
          </p>
          <ul>
            <li>Who is the learning for?</li>
            <li>What do people need to understand or do?</li>
            <li>What is happening at the moment?</li>
            <li>Are there any access, platform or timing requirements?</li>
          </ul>
          <p>Share what you know. The approach can take shape from there.</p>
          <ActionLink href="/about">Meet Daniel and the studio</ActionLink>
        </aside>
      </section>
      <section className="contact-explore shell">
        <Eyebrow>Still exploring?</Eyebrow>
        <h2>Find the right support.</h2>
        <div className="hero-actions">
          <ActionLink href="/services">Compare our services</ActionLink>
          <ActionLink href="/insights">Read our insights</ActionLink>
        </div>
      </section>
    </main>
  );
}
