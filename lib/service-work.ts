import { publishedCases } from "./work";
const examples: Record<string, string> = {
  "elearning-design-development": "information-security",
  "learning-platforms-lms": "your-learning-platform",
  "learning-strategy-consultancy": "strategic-skills-mapping",
  "ongoing-learning-support": "humankind-educatorhub",
};
export function serviceExample(slug: string) {
  return publishedCases().find(
    (study) =>
      study.slug === examples[slug] && study.serviceSlugs.includes(slug),
  );
}
