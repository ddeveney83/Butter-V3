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
