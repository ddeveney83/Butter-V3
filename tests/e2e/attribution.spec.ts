import { test, expect } from "@playwright/test";
import { caseStudies } from "../../content/case-studies";
import { insights } from "../../content/insights";
import { services } from "../../content/services";

test("public pages and metadata use Butter attribution without personal credits", async ({
  request,
}) => {
  const routes = [
    "/",
    "/services",
    "/work",
    "/about",
    "/insights",
    "/contact",
    "/privacy",
    "/terms",
    "/review/insights",
    "/review/work",
    ...services.map((item) => `/services/${item.slug}`),
    ...caseStudies.map((item) => `/work/${item.slug}`),
    ...insights.flatMap((item) => [
      `/insights/${item.slug}`,
      `/review/insights/${item.slug}`,
    ]),
  ];
  for (const route of routes) {
    const response = await request.get(route);
    if (route.startsWith("/review/insights")) {
      expect([200, 404], route).toContain(response.status());
    } else {
      expect(response.status(), route).toBe(200);
    }
    expect(await response.text(), route).not.toMatch(/daniel|deveney/i);
  }
});
