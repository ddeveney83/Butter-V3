import type { PublicationStatus } from "./routes";
import { migratedCases } from "./portfolio-projects";
import type { WorkCategory } from "./work-categories";
export { workCategories } from "./work-categories";
export type { WorkCategory } from "./work-categories";
export interface CaseImage {
  src: string;
  alt: string;
  rights: string;
}
export interface WorkPresentation {
  tone: "garden" | "ink" | "yellow" | "sage";
  icon: "sprout" | "shield" | "layers" | "bulb" | "compass" | "film";
  screen: CaseImage | null;
  tilt: "left" | "right";
}
export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  category: WorkCategory;
  tags: WorkCategory[];
  status: PublicationStatus;
  approval: {
    owner: string;
    clientPermission: string;
    portfolioReuse?: string;
  };
  role: { kind: "butter" | "employment" | "professional"; description: string };
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
  organisation?: string;
  discipline?: string;
  card?: WorkPresentation;
  source?: {
    url: string;
    snapshot: string;
    checkedOn: string;
    liveVerified: boolean;
  };
  pendingMedia?: { notice: string; approval: string };
  story?: { title: string; paragraphs: string[]; image: CaseImage | null }[];
  videos?: { id: string; title: string }[];
}
// Owner requested migration of their existing personal portfolio on 26 October 2026.
export const caseStudies: CaseStudy[] = migratedCases;
