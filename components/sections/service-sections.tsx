import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Layers,
  Presentation,
  Users,
  Accessibility,
  ChartNoAxesColumnIncreasing,
  Monitor,
  GitBranch,
  Play,
  Gamepad2,
  ListChecks,
  Settings,
  SlidersHorizontal,
  Route,
  Network,
  Search,
  Map,
  ClipboardList,
  Target,
  RefreshCw,
  FilePenLine,
  MessageCircle,
} from "lucide-react";
import {
  ActionLink,
  AssetPlaceholder,
  Eyebrow,
} from "@/components/ui/primitives";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { services } from "@/content/services";
import type { FAQ } from "@/content/service-details";
export const serviceIcons = {
  learning: Presentation,
  platform: Layers,
  strategy: Compass,
  support: Users,
};
export function ProcessSteps({
  steps,
}: {
  steps: readonly { title: string; description: string }[];
}) {
  return (
    <ol className={`process-grid ${steps.length === 4 ? "four-steps" : ""}`}>
      {steps.map((step, index) => (
        <li key={step.title}>
          <div className="step-top">
            <span className="step-number">0{index + 1}</span>
            {index < steps.length - 1 && (
              <ArrowRight aria-hidden="true" size={20} />
            )}
          </div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
export function FAQSection({
  items,
  split = false,
}: {
  items: readonly FAQ[];
  split?: boolean;
}) {
  return (
    <section
      className={`service-faq shell ${split ? "detail-faq" : ""}`}
      aria-labelledby="faq-heading"
    >
      {split ? (
        <div className="testimonial-reservation">
          <Eyebrow>Evidence, with permission</Eyebrow>
          <h2>
            Genuine voices.
            <br />
            Real experience.
          </h2>
          <p>
            Testimonial and photograph awaiting approval. No client endorsement
            is published here.
          </p>
          <AssetPlaceholder label="Approved testimonial photograph" />
        </div>
      ) : (
        <div>
          <Eyebrow>Frequently asked questions</Eyebrow>
          <h2 id="faq-heading">
            Your questions
            <br />
            answered.
          </h2>
          <p className="section-intro">
            Practical answers about services, process and working with Butter.
          </p>
          <ActionLink href="/contact">Discuss your question</ActionLink>
        </div>
      )}
      <div>
        {split && (
          <>
            <Eyebrow>Frequently asked questions</Eyebrow>
            <h2 id="faq-heading" className="sr-only">
              Your questions answered
            </h2>
          </>
        )}
        <FAQAccordion items={items} />
      </div>
    </section>
  );
}
export function RelatedServices({ current }: { current: string }) {
  return (
    <nav className="related-services shell" aria-label="Related services">
      <Eyebrow>Explore other support</Eyebrow>
      <ul>
        {services
          .filter((service) => service.slug !== current)
          .map((service) => (
            <li key={service.slug}>
              <Link className="text-link" href={`/services/${service.slug}`}>
                {service.title}
              </Link>
            </li>
          ))}
      </ul>
      <div className="related-links">
        <ActionLink href="/work">Explore our work</ActionLink>
        <ActionLink href="/insights">Explore insights</ActionLink>
      </div>
    </nav>
  );
}
export const benefitIcons = [
  Users,
  Layers,
  Accessibility,
  ChartNoAxesColumnIncreasing,
];
const elearningSolutionIcons = [
  Monitor,
  Users,
  GitBranch,
  Gamepad2,
  ListChecks,
  Settings,
  SlidersHorizontal,
  Route,
  Network,
  Search,
  Map,
  ClipboardList,
  Target,
  RefreshCw,
  FilePenLine,
  MessageCircle,
  Play,
  Accessibility,
];

export function solutionIconsFor(slug: string) {
  switch (slug) {
    case "learning-platforms-lms":
      return [ListChecks, Settings, SlidersHorizontal, Route, Network, Users];
    case "learning-strategy-consultancy":
      return [Search, MessageCircle, Route, Map, Target, ClipboardList];
    case "ongoing-learning-support":
      return [
        FilePenLine,
        Settings,
        ListChecks,
        Accessibility,
        MessageCircle,
        RefreshCw,
      ];
    default:
      return elearningSolutionIcons;
  }
}
