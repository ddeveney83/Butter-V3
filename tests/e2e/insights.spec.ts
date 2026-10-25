import { test, expect } from "@playwright/test";
import { insights } from "../../content/insights";
import { loadVisualImages } from "./visual-images";

test("Insights has real HTML, honest publication state and working public navigation", async ({
  page,
  request,
}, testInfo) => {
  const response = await page.goto("/insights");
  expect(response?.status()).toBe(200);
  expect(response?.headers()["x-robots-tag"]).toContain("noindex");
  await expect(page).toHaveTitle(
    "Insights | Learning design, LMS and accessibility | Butter",
  );
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("h1")).toContainText("practical advice.");
  await expect(page.getByRole("status")).toHaveText("2 published articles");
  await expect(page.locator(".insights-context")).toContainText("Devon");
  await expect(page.locator(".insights-context")).toContainText(
    "South West and UK-wide",
  );
  const html = await (await request.get("/insights")).text();
  expect(html).toContain(insights[0].title);
  expect(html).not.toContain("This is a route scaffold");
  for (const entry of insights) {
    expect(html).toContain(entry.title);
    expect((await request.get(`/insights/${entry.slug}`)).status()).toBe(200);
  }
  expect((await request.get("/insights/unknown")).status()).toBe(404);
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain("<loc>");
  await expect(page.locator('a[href^="/review"]')).toHaveCount(0);
  await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(
    0,
  );
  const topic = page.getByRole("button", {
    name: "Accessibility",
    exact: true,
  });
  await topic.focus();
  await page.keyboard.press("Enter");
  await expect(topic).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("status")).toHaveText(
    "1 published article in Accessibility",
  );
  await page
    .getByRole("button", { name: "Learning design", exact: true })
    .click();
  await page.getByRole("button", { name: "Show all insights" }).click();
  await expect(
    page.getByRole("button", { name: "All", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  for (const width of [1440, 1280, 1024, 768, 390, 375]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `Public insights ${width}`,
    ).toBe(true);
  }
  const paths = await page
    .locator("main a[href]")
    .evaluateAll((elements) => [
      ...new Set(elements.map((element) => element.getAttribute("href")!)),
    ]);
  for (const path of paths)
    expect((await request.get(path)).status()).toBe(200);
  await page.setViewportSize(
    testInfo.project.name === "mobile"
      ? { width: 390, height: 844 }
      : { width: 1440, height: 1000 },
  );
  await loadVisualImages(page);
  await page.screenshot({
    path: testInfo.outputPath("insights-public.png"),
    fullPage: true,
  });
  if (testInfo.project.name === "mobile")
    await page.getByRole("button", { name: "Open menu" }).click();
  const nav = page.getByRole("navigation", {
    name: testInfo.project.name === "mobile" ? "Mobile" : "Primary",
    exact: true,
  });
  await expect(
    nav.getByRole("link", { name: "Insights", exact: true }),
  ).toHaveAttribute("aria-current", "page");
});

test("Approved articles filter by topic and open from their cards", async ({
  page,
}, testInfo) => {
  await page.goto("/insights");
  await expect(page.locator(".insight-card")).toHaveCount(2);
  await expect(page.getByRole("status")).toHaveText("2 published articles");
  await expect(page.locator(".insight-card")).toHaveCount(2);
  const platform = page.getByRole("button", {
    name: "Learning platforms",
    exact: true,
  });
  await platform.focus();
  await page.keyboard.press("Space");
  await expect(platform).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".insight-card")).toHaveCount(1);
  await expect(page.locator(".insight-card h2")).toHaveText(insights[0].title);
  await page
    .getByRole("button", { name: "Accessibility", exact: true })
    .click();
  await expect(page.locator(".insight-card h2")).toHaveText(insights[1].title);
  await page
    .getByRole("button", { name: "Learning design", exact: true })
    .click();
  await expect(page.getByRole("status")).toHaveText(
    "0 published articles in Learning design",
  );
  await page.getByRole("button", { name: "Show all insights" }).click();
  for (const width of [1440, 1280, 1024, 768, 390, 375]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `Review insights ${width}`,
    ).toBe(true);
  }
  await page.setViewportSize(
    testInfo.project.name === "mobile"
      ? { width: 390, height: 844 }
      : { width: 1440, height: 1000 },
  );
  await loadVisualImages(page);
  await page.screenshot({
    path: testInfo.outputPath("insights-filtered.png"),
    fullPage: true,
  });
  const draftLink = page
    .locator(".insight-card")
    .first()
    .getByRole("link", { name: /Read article/ });
  await expect(draftLink).toHaveAttribute(
    "href",
    `/insights/${insights[0].slug}`,
  );
  await draftLink.focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(`/insights/${insights[0].slug}`);
  await expect(page.locator("h1")).toHaveText(insights[0].title);
});

test("Approved articles have accessible reading, sources, author and internal links", async ({
  page,
  request,
}, testInfo) => {
  for (const [index, entry] of insights.entries()) {
    const path = `/insights/${entry.slug}`;
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    expect(response?.headers()["x-robots-tag"]).toContain("noindex");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page).toHaveTitle(`${entry.title} | Butter Insights`);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
    await expect(
      page.locator('script[type="application/ld+json"]'),
    ).toHaveCount(0);
    await expect(
      page.getByText("Draft for review · Not published", { exact: true }),
    ).toHaveCount(0);
    await expect(page.locator(".article-byline")).toContainText(
      "By Daniel Deveney",
    );
    await expect(page.locator(".article-byline")).toContainText(
      "Published 25 October 2026",
    );
    await expect(page.locator(".article-byline time")).toHaveAttribute(
      "datetime",
      "2026-10-25",
    );
    const html = await (await request.get(path)).text();
    expect(html).toContain(entry.answer);
    for (const section of entry.sections) expect(html).toContain(section.title);
    expect(
      (await page.locator(".article-body").innerText()).split(/\s+/).length,
    ).toBeGreaterThan(800);
    await expect(page.locator(".article-body > section")).toHaveCount(7);
    await expect(page.locator(".article-sources li")).toHaveCount(
      entry.sources.length,
    );
    for (const source of entry.sources)
      await expect(page.locator(`#source-${source.id} > a`)).toHaveAttribute(
        "href",
        source.url,
      );
    const contents = page.getByRole("navigation", { name: "In this article" });
    const firstSection = contents.locator("a").first();
    await firstSection.focus();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(`${path}#${entry.sections[0].id}`);
    await expect(
      page.locator(`#${entry.sections[0].id}-title`),
    ).toBeInViewport();
    const ids = await page
      .locator("[id]")
      .evaluateAll((elements) => elements.map((element) => element.id));
    expect(new Set(ids).size).toBe(ids.length);
    const links = await page
      .locator('main a[href^="/"]')
      .evaluateAll((elements) => [
        ...new Set(elements.map((element) => element.getAttribute("href")!)),
      ]);
    for (const href of links)
      expect((await request.get(href)).status()).toBe(200);
    const related = page.locator(".article-related a").first();
    await expect(related).toHaveAttribute(
      "href",
      `/insights/${entry.relatedSlugs[0]}`,
    );
    for (const width of [1440, 1280, 1024, 768, 390, 375]) {
      await page.setViewportSize({ width, height: 900 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `Article ${index} at ${width}`,
      ).toBe(true);
    }
    await page.setViewportSize(
      testInfo.project.name === "mobile"
        ? { width: 390, height: 844 }
        : { width: 1440, height: 1000 },
    );
    await page.goto(path);
    await loadVisualImages(page);
    await page.screenshot({
      path: testInfo.outputPath(`article-${index}-first-fold.png`),
    });
    await page.screenshot({
      path: testInfo.outputPath(`article-${index}-full.png`),
      fullPage: true,
    });
  }
  expect((await request.get("/review/insights/unknown")).status()).toBe(404);
});
