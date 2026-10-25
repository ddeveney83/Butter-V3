import type { PublicationStatus } from "./routes";

export interface EditorialEntry {
  slug: string;
  title: string;
  status: PublicationStatus;
  approvedBy?: string;
  evidence: string[];
  assetRights: string[];
}
// Populate only from owner-approved source material; never seed fake proof.
export const caseStudies: EditorialEntry[] = [];
export const insights: EditorialEntry[] = [];
