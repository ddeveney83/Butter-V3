import { InsightsHub } from "@/components/insights/insights-hub";
import { publishedInsights } from "@/lib/insights";
import { routeMetadata } from "@/lib/seo";
import { findRoute } from "@/content/routes";
export const metadata = {
  ...routeMetadata(findRoute("/insights")!),
  title: "Insights | Learning design, LMS and accessibility | Butter",
  description:
    "Practical guidance on learning design, learning platforms and accessibility from Butter, an independent digital learning studio based in Devon.",
};
export default function Insights() {
  return <InsightsHub entries={publishedInsights()} />;
}
