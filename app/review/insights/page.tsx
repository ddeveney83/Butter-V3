import { notFound } from "next/navigation";
import { insights } from "@/content/insights";
import { InsightsHub } from "@/components/insights/insights-hub";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Insights editorial review only | Butter",
  robots: { index: false, follow: false },
};
export default function InsightsReview() {
  if (process.env.ENABLE_DESIGN_REVIEW !== "true") notFound();
  return <InsightsHub entries={insights} review />;
}
