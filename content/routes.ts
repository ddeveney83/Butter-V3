export type PublicationStatus = "draft" | "approved" | "published";
export interface RouteRecord {
  path: string;
  title: string;
  phase: number;
  intent: string;
  status: PublicationStatus;
  description: string;
}
// Titles here label development destinations; final metadata is reviewed per phase.
export const routes: RouteRecord[] = [
  {
    path: "/",
    title: "Home",
    phase: 1,
    intent: "Understand the studio and overall fit",
    status: "approved",
    description:
      "Understand the studio and overall fit. Content and publication approval pending.",
  },
  {
    path: "/services",
    title: "Services",
    phase: 2,
    intent: "Compare the four service offerings",
    status: "approved",
    description:
      "Compare the four service offerings. Content and publication approval pending.",
  },
  {
    path: "/services/elearning-design-development",
    title: "eLearning Design & Development",
    phase: 2,
    intent: "Commission bespoke accessible eLearning",
    status: "approved",
    description:
      "Commission bespoke accessible eLearning. Content and publication approval pending.",
  },
  {
    path: "/services/learning-platforms-lms",
    title: "Learning Platforms & LMS",
    phase: 2,
    intent: "Select, implement or improve an LMS",
    status: "approved",
    description:
      "Select, implement or improve an LMS. Content and publication approval pending.",
  },
  {
    path: "/services/learning-strategy-consultancy",
    title: "Learning Strategy & Consultancy",
    phase: 2,
    intent: "Diagnose learning needs and plan outcomes",
    status: "approved",
    description:
      "Diagnose learning needs and plan outcomes. Content and publication approval pending.",
  },
  {
    path: "/services/ongoing-learning-support",
    title: "Ongoing Learning Support",
    phase: 2,
    intent: "Find ongoing learning and platform support",
    status: "approved",
    description:
      "Find ongoing learning and platform support. Content and publication approval pending.",
  },
  {
    path: "/work",
    title: "Work",
    phase: 3,
    intent: "Assess approved project evidence",
    status: "approved",
    description:
      "Assess approved project evidence. Content and publication approval pending.",
  },
  {
    path: "/about",
    title: "About",
    phase: 4,
    intent: "Understand studio identity and credibility",
    status: "published",
    description:
      "Understand studio identity and credibility. Content and publication approval pending.",
  },
  {
    path: "/insights",
    title: "Insights",
    phase: 5,
    intent: "Find practical learning expertise",
    status: "published",
    description:
      "Find practical learning expertise. Content and publication approval pending.",
  },
  {
    path: "/contact",
    title: "Contact",
    phase: 6,
    intent: "Start a genuine enquiry",
    status: "draft",
    description:
      "Start a genuine enquiry. Content and publication approval pending.",
  },
  {
    path: "/privacy",
    title: "Privacy",
    phase: 6,
    intent: "Understand actual personal data processing",
    status: "draft",
    description:
      "Understand actual personal data processing. LEGAL COPY REQUIRED.",
  },
  {
    path: "/terms",
    title: "Terms",
    phase: 6,
    intent: "Understand approved website terms",
    status: "draft",
    description: "Understand approved website terms. LEGAL COPY REQUIRED.",
  },
];

export const primaryNavigation = [
  "/services",
  "/work",
  "/about",
  "/insights",
] as const;
export const detailRoutePatterns = [
  "/work/[slug]",
  "/insights/[slug]",
] as const;
export const optionalRegionalRoute = "/elearning-design-devon";
export const findRoute = (path: string) =>
  routes.find((route) => route.path === path);
export function publishedRoutes(records: readonly RouteRecord[] = routes) {
  return records.filter((route) => route.status === "published");
}
