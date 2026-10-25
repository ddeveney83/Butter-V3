import { test, expect } from "@playwright/test";
import { workCategories } from "../../content/case-studies";

test("public Work renders genuine empty states and never exposes design examples or mockup clients", async ({
  page,
  request,
}, testInfo) => {
  const response = await page.goto("/work");
  expect(response?.status()).toBe(200);
  expect(response?.headers()["x-robots-tag"]).toContain("noindex");
  await expect(page.locator("h1")).toHaveText(
    "Real challenges.Meaningful results.",
  );
  await expect(page.locator(".work-card")).toHaveCount(0);
  const html = await (await request.get("/work")).text();
  for (const text of [
    "British Red Cross",
    "Nansen.ai",
    "Layout example",
    "10,000+",
    "93%+",
  ])
    expect(html).not.toContain(text);
  expect(html).toContain("Case studies are being prepared.");
  const filters = page.getByRole("group", { name: "Filter work by category" });
  for (const category of workCategories) {
    const button = filters.getByRole("button", { name: category, exact: true });
    await button.focus();
    await page.keyboard.press("Enter");
    await expect(button).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByRole("status")).toContainText("0 case studies");
    if (category !== "All")
      await expect(
        page.getByRole("heading", {
          name: "No approved case studies in this category yet.",
        }),
      ).toBeVisible();
  }
  await page.getByRole("button", { name: "Show all work" }).click();
  await expect(
    filters.getByRole("button", { name: "All", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  for (const slug of [
    "unapproved",
    "layout-only",
    "british-red-cross",
    "synthetic-case",
  ])
    expect((await request.get(`/work/${slug}`)).status()).toBe(404);
  const links = await page
    .locator("main a[href]")
    .evaluateAll((elements) => [
      ...new Set(elements.map((element) => element.getAttribute("href")!)),
    ]);
  for (const href of links)
    expect((await request.get(href)).status()).toBe(200);
  if (testInfo.project.name === "desktop")
    await expect(
      page
        .getByRole("navigation", { name: "Primary" })
        .getByRole("link", { name: "Work", exact: true }),
    ).toHaveAttribute("aria-current", "page");
  for (const width of [1440, 1280, 1024, 768, 390, 375]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  await page.setViewportSize(
    testInfo.project.name === "mobile"
      ? { width: 390, height: 844 }
      : { width: 1440, height: 1000 },
  );
  await page.screenshot({
    path: testInfo.outputPath("work-index.png"),
    fullPage: true,
  });
});

test("opt-in review exercises populated category filtering and case template without publishing examples", async ({
  page,
  request,
}, testInfo) => {
  await page.goto("/review/work");
  await expect(page.locator("h1")).toHaveText("Work layout examples");
  await expect(page.locator(".work-card")).toHaveCount(6);
  const filters = page.getByRole("group", { name: "Filter work by category" });
  for (const category of workCategories.slice(1)) {
    const button = filters.getByRole("button", { name: category, exact: true });
    await button.focus();
    await page.keyboard.press("Space");
    await expect(button).toBeFocused();
    await expect(button).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator(".work-card")).toHaveCount(1);
    await expect(page.locator(".work-card > .eyebrow")).toHaveText(category);
    await expect(page.getByRole("status")).toContainText("1 layout example");
  }
  await filters.getByRole("button", { name: "All", exact: true }).click();
  await expect(page.locator(".work-card")).toHaveCount(6);
  await page
    .getByRole("link", { name: "Review layout: Layout example 1" })
    .click();
  await expect(page).toHaveURL(/#case-study-preview$/);
  const detail = page.locator("#case-study-preview");
  for (const label of [
    "The challenge",
    "Our approach",
    "What we delivered",
    "Attribution required",
    "Outcomes and evidence",
  ])
    await expect(detail.getByText(label, { exact: true })).toBeVisible();
  await expect(detail.locator(".case-proof > div")).toHaveCount(4);
  await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(
    0,
  );
  for (const width of [1440, 1280, 1024, 768, 390, 375]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  await page.setViewportSize(
    testInfo.project.name === "mobile"
      ? { width: 390, height: 844 }
      : { width: 1440, height: 1000 },
  );
  await page.screenshot({
    path: testInfo.outputPath("work-design-review.png"),
    fullPage: true,
  });
  await detail.screenshot({ path: testInfo.outputPath("case-template.png") });
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain("/review/");
  expect(sitemap).not.toContain("layout-only");
});
