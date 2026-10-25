import type { WorkCategory } from "../content/case-studies";
export function filterWork<
  T extends { category: WorkCategory; tags: WorkCategory[] },
>(entries: readonly T[], category: WorkCategory | "All"): T[] {
  return entries.filter(
    (entry) =>
      category === "All" ||
      entry.category === category ||
      entry.tags.includes(category),
  );
}
