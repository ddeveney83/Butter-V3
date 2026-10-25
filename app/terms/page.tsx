import { LegalPage } from "@/components/sections/legal-page";
import { routeMetadata } from "@/lib/seo";
import { findRoute } from "@/content/routes";
import { legalDocuments } from "@/content/legal";
export const metadata = {
  ...routeMetadata(findRoute("/terms")!),
  title: "Website terms | Butter",
  description: legalDocuments.terms.description,
};
export default function Terms() {
  return <LegalPage kind="terms" />;
}
