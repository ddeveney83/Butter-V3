import { LegalPage } from "@/components/sections/legal-page";
import { routeMetadata } from "@/lib/seo";
import { findRoute } from "@/content/routes";
import { legalDocuments } from "@/content/legal";
export const metadata = {
  ...routeMetadata(findRoute("/privacy")!),
  title: "Privacy notice | Butter",
  description: legalDocuments.privacy.description,
};
export default function Privacy() {
  return <LegalPage kind="privacy" />;
}
