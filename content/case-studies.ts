import type { PublicationStatus } from "./routes";
export const workCategories = [
  "All",
  "Charity & Non-profit",
  "Housing & Communities",
  "Maritime",
  "Compliance",
  "LMS & Platforms",
  "Strategy",
] as const;
export type WorkCategory = Exclude<(typeof workCategories)[number], "All">;
export interface CaseImage {
  src: string;
  alt: string;
  rights: string;
}
export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  category: WorkCategory;
  tags: WorkCategory[];
  status: PublicationStatus;
  approval: { owner: string; clientPermission: string };
  role: { kind: "butter" | "employment"; description: string };
  headline: string;
  introduction: string;
  challenge: {
    title: string;
    text: string;
    audience: string;
    constraints: string;
  };
  requirements: string[];
  approach: { title: string; text: string; designDecision: string };
  deliverables: string[];
  outcomes: { value: string; label: string; evidence: string }[];
  outcomeNarrative: string;
  evidence: string[];
  hero: CaseImage | null;
  gallery: CaseImage[];
  serviceSlugs: string[];
}
// No approved source narratives, rights or role attribution have been supplied.
export const caseStudies: CaseStudy[] = [];
