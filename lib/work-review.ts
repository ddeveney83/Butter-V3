import type { CaseStudy, WorkCategory } from "../content/case-studies";
import type { WorkCardData } from "./work";
const categories: WorkCategory[] = [
  "Charity & Non-profit",
  "Housing & Communities",
  "Maritime",
  "Compliance",
  "LMS & Platforms",
  "Strategy",
];
export const reviewCards: WorkCardData[] = categories.map(
  (category, index) => ({
    slug: `layout-example-${index + 1}`,
    title: `Layout example ${index + 1}`,
    summary: "Design placeholder only. Not a real client, project or outcome.",
    category,
    tags: [],
    image: null,
    href: "#case-study-preview",
  }),
);
export const reviewCase: CaseStudy = {
  slug: "layout-only",
  title: "Case study layout preview",
  summary: "Design structure only; not a project narrative.",
  category: "Charity & Non-profit",
  tags: [],
  status: "draft",
  approval: { owner: "", clientPermission: "" },
  role: {
    kind: "butter",
    description:
      "Replace with the approved delivery role, distinguishing a Butter engagement from work undertaken in employment.",
  },
  headline: "A place for a verified project story.",
  introduction:
    "This is a design review of the case-study template. No client relationship, delivery claim or outcome is represented.",
  challenge: {
    title: "The learning challenge, in context.",
    text: "Approved copy will explain the real problem and why a learning intervention was needed.",
    audience: "Describe the actual audience and setting once confirmed.",
    constraints:
      "Record real delivery, accessibility and technical constraints.",
  },
  requirements: [
    "Approved audience needs",
    "Agreed accessibility requirements",
    "Confirmed platform constraints",
    "Verifiable evaluation criteria",
  ],
  approach: {
    title: "A considered response to a real need.",
    text: "Approved copy will explain the approach and decisions taken during delivery.",
    designDecision:
      "Explain a specific decision and its rationale, using genuine first-hand evidence.",
  },
  deliverables: [
    "Approved learning design outputs",
    "Confirmed content and media scope",
    "Actual technical deliverables",
    "Agreed handover and support",
  ],
  outcomes: [],
  outcomeNarrative:
    "This section needs verified outcomes and their sources. Qualitative evidence is welcome; numerical results must never be invented.",
  evidence: [],
  hero: null,
  gallery: [],
  serviceSlugs: [
    "elearning-design-development",
    "learning-strategy-consultancy",
  ],
};
