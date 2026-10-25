import { test, expect } from "@playwright/test";
import { routes } from "../../content/routes";

test("all planned static destinations render honest scaffolds without overflow", async ({
  page,
}) => {
  for (const route of routes) {
    const response = await page.goto(route.path);
    expect(response?.status()).toBe(200);
    expect(response?.headers()["x-robots-tag"]).toContain("noindex");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
    await expect(page.locator("html")).toHaveAttribute("lang", "en-GB");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
});
test("navigation works, content is real HTML, and skip link supports keyboard", async ({
  page,
  request,
}) => {
  const response = await request.get("/");
  expect(await response.text()).toContain("Butter website foundations");
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await page
    .getByRole("navigation", { name: "Primary" })
    .getByRole("link", { name: "Services", exact: true })
    .click();
  await expect(page).toHaveURL(/\/services$/);
  await page.getByRole("link", { name: "Let’s talk" }).click();
  await expect(
    page.getByText("Enquiries cannot be submitted here yet.", { exact: false }),
  ).toBeVisible();
  await expect(page.locator("form")).toHaveCount(0);
});
test("draft details, optional locality and source references are not served", async ({
  request,
}) => {
  for (const path of [
    "/work/unapproved",
    "/insights/unapproved",
    "/elearning-design-devon",
    "/reference/01-home-desktop.png",
    "/unknown",
  ]) {
    expect((await request.get(path)).status()).toBe(404);
  }
  expect(await (await request.get("/robots.txt")).text()).toContain(
    "Disallow: /",
  );
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain("<loc>");
});
test("capture Phase 0 shell evidence", async ({ page }, testInfo) => {
  await page.goto("/");
  await page.screenshot({
    path: testInfo.outputPath("phase-0-foundations.png"),
    fullPage: true,
  });
});
