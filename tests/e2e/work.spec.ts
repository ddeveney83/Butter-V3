import { loadVisualImages } from "./visual-images";
import { test, expect } from "@playwright/test";
import { caseStudies, workCategories } from "../../content/case-studies";

const expectedCounts: Record<string, number> = {
  All: 16,
  "Charity & Non-profit": 4,
  "Housing & Communities": 8,
  Maritime: 0,
  Compliance: 6,
  "LMS & Platforms": 4,
  Strategy: 3,
};
test("Work shows sourced projects, filters honestly and matches the new three-column card reference", async ({
  page,
  request,
}, testInfo) => {
  const response = await page.goto("/work");
  expect(response?.status()).toBe(200);
  expect(response?.headers()["x-robots-tag"]).toContain("noindex");
  await expect(page.locator("h1")).toHaveText(
    "Real challenges.Meaningful results.",
  );
  await expect(page.locator(".work-card")).toHaveCount(16);
  const html = await (await request.get("/work")).text();
  expect(html).toContain("15-Minute Compliance");
  expect(html).toContain("British Red Cross");
  expect(html).not.toContain("Layout example");
  expect(html).not.toContain("10,000+");
  await expect(page.locator(".temporary-work-preview")).toHaveCount(0);
  const filters = page.getByRole("group", { name: "Filter work by category" });
  for (const category of workCategories) {
    const button = filters.getByRole("button", { name: category, exact: true });
    await button.focus();
    await page.keyboard.press("Enter");
    await expect(button).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator(".work-card")).toHaveCount(
      expectedCounts[category],
    );
    await expect(page.getByRole("status")).toContainText(
      `${expectedCounts[category]} case studies`,
    );
    if (!expectedCounts[category])
      await expect(
        page.getByRole("heading", {
          name: "No approved case studies in this category yet.",
        }),
      ).toBeVisible();
  }
  await filters.getByRole("button", { name: "All", exact: true }).click();
  await expect(page.locator(".work-card")).toHaveCount(16);
  const links = await page
    .locator('main a[href^="/"]')
    .evaluateAll((elements) => [
      ...new Set(elements.map((element) => element.getAttribute("href")!)),
    ]);
  for (const href of links)
    expect((await request.get(href)).status()).toBe(200);
  for (const slug of [
    "unapproved",
    "layout-only",
    "british-red-cross",
    "synthetic-case",
  ])
    expect((await request.get(`/work/${slug}`)).status()).toBe(404);
  for (const width of [1440, 1280, 1024, 768, 390, 375]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `Work ${width}px`,
    ).toBe(true);
    const columns = await page
      .locator(".work-card-grid")
      .evaluate(
        (element) =>
          getComputedStyle(element).gridTemplateColumns.split(" ").length,
      );
    expect(columns).toBe(width >= 1024 ? 3 : width >= 768 ? 2 : 1);
  }
  await page.setViewportSize(
    testInfo.project.name === "mobile"
      ? { width: 390, height: 844 }
      : { width: 1440, height: 1000 },
  );
  await loadVisualImages(page);
  await page.screenshot({
    path: testInfo.outputPath("work-index.png"),
    fullPage: true,
  });
  const card = page.locator(".work-card").first();
  await card.screenshot({ path: testInfo.outputPath("work-card.png") });
  if (testInfo.project.name === "desktop") {
    await page.emulateMedia({ reducedMotion: "no-preference" });
    const window = card.locator(".project-window");
    const initial = await window.evaluate(
      (element) => getComputedStyle(element).transform,
    );
    const symbol = card.locator(".project-symbol");
    const initialSymbol = await symbol.evaluate(
      (element) => getComputedStyle(element).transform,
    );
    await card.hover();
    await expect
      .poll(() =>
        window.evaluate((element) => getComputedStyle(element).transform),
      )
      .not.toBe(initial);
    await expect
      .poll(() =>
        symbol.evaluate((element) => getComputedStyle(element).transform),
      )
      .not.toBe(initialSymbol);
    await card.screenshot({ path: testInfo.outputPath("work-card-hover.png") });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.locator("h1").hover();
    const resting = await window.evaluate(
      (element) => getComputedStyle(element).transform,
    );
    await card.hover();
    expect(
      await window.evaluate((element) => getComputedStyle(element).transform),
    ).toBe(resting);
    await expect(
      page
        .getByRole("navigation", { name: "Primary", exact: true })
        .getByRole("link", { name: "Work", exact: true }),
    ).toHaveAttribute("aria-current", "page");
  }
});

test("all migrated case studies show accurate source roles, real detail routes and explicit media gaps", async ({
  page,
  request,
}, testInfo) => {
  for (const study of caseStudies) {
    const response = await page.goto(`/work/${study.slug}`);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveText(study.title);
    await expect(page).toHaveTitle(`${study.title} | Butter case study`);
    await expect(page.locator(".role-attribution")).toContainText(
      "Designed and delivered by Butter.",
    );
    await expect(page.locator(".case-story-section")).toHaveCount(3);
    await expect(page.locator(".case-source")).toHaveCount(0);
    await expect(page.locator(".case-proof > div")).toHaveCount(4);
    await expect(
      page.locator(".case-media-notice, .project-media-pending, .case-gallery"),
    ).toHaveCount(0);
    expect(await page.locator("main").innerText()).not.toMatch(
      /Daniel|personal portfolio/,
    );
    await expect(page.locator(".case-outcome")).toContainText(
      study.outcomeNarrative,
    );
    expect(await (await request.get(`/work/${study.slug}`)).text()).toContain(
      study.challenge.text.replaceAll("&", "&amp;"),
    );
    if (study.pendingMedia) {
      await expect(page.locator(".case-media-notice")).toContainText(
        "No substitute",
      );
      await expect(
        page.locator(".case-hero .project-media-pending"),
      ).toBeVisible();
      await expect(page.locator(".case-hero img")).toHaveCount(0);
    } else {
      await expect(page.locator(".case-hero img")).toHaveCount(1);
      await expect(page.locator(".case-gallery")).toHaveCount(0);
      const images = await page
        .locator(".case-hero img, .case-story img")
        .evaluateAll((elements) =>
          elements.map((el) => el.getAttribute("src")),
        );
      expect(new Set(images).size).toBe(images.length);
    }
    await expect(page.locator("iframe")).toHaveCount(0);
    const links = await page
      .locator('main a[href^="/"]')
      .evaluateAll((elements) => [
        ...new Set(elements.map((element) => element.getAttribute("href")!)),
      ]);
    for (const href of links)
      expect((await request.get(href)).status()).toBe(200);
    for (const width of [1440, 1280, 1024, 768, 390, 375]) {
      await page.setViewportSize({ width, height: 900 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${study.slug} ${width}`,
      ).toBe(true);
    }
    if (
      [
        "information-security",
        "humankind-educatorhub",
        "ld-digital-upskilling",
        "food-safety-level-3",
        "your-learning-platform",
      ].includes(study.slug)
    ) {
      await page.setViewportSize(
        testInfo.project.name === "mobile"
          ? { width: 390, height: 844 }
          : { width: 1440, height: 1000 },
      );
      await loadVisualImages(page);
      await page.screenshot({
        path: testInfo.outputPath(`${study.slug}.png`),
        fullPage: true,
      });
    }
  }
});

test("opt-in layout review remains separate from real portfolio projects", async ({
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
    await expect(button).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator(".work-card")).toHaveCount(1);
    await expect(page.locator(".project-card-meta")).toHaveText(category);
  }
  await filters.getByRole("button", { name: "All", exact: true }).click();
  await page
    .getByRole("link", { name: "Review layout: Layout example 1" })
    .click();
  await expect(page).toHaveURL(/#case-study-preview$/);
  const detail = page.locator("#case-study-preview");
  await expect(
    detail.getByText("Attribution required", { exact: true }),
  ).toBeVisible();
  await expect(detail.locator(".case-proof > div")).toHaveCount(4);
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
  await loadVisualImages(page);
  await detail.screenshot({ path: testInfo.outputPath("case-template.png") });
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain("/review/");
  expect(sitemap).not.toContain("layout-only");
});

test("Home features three projects and impact panels use Butter yellow", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  await expect(page.locator(".work-card")).toHaveCount(3);
  expect(
    await page
      .locator(".work-card-grid")
      .evaluate(
        (el) => getComputedStyle(el).gridTemplateColumns.split(" ").length,
      ),
  ).toBe(testInfo.project.name === "desktop" ? 3 : 1);
  await loadVisualImages(page);
  await page
    .locator(".work-card-grid")
    .screenshot({ path: testInfo.outputPath("home-featured-work.png") });
  await page.goto("/work/information-security");
  expect(
    await page
      .locator(".case-proof")
      .evaluate((el) => getComputedStyle(el).backgroundColor),
  ).toBe("rgb(254, 218, 78)");
  expect(
    await page
      .locator(".case-proof")
      .evaluate(
        (el) => getComputedStyle(el).gridTemplateColumns.split(" ").length,
      ),
  ).toBe(testInfo.project.name === "desktop" ? 4 : 1);
});
