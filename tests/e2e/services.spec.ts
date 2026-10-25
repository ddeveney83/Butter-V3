import { test, expect } from "@playwright/test";
import { serviceDetails } from "../../content/service-details";

const pages = [
  "/services",
  ...serviceDetails.map((service) => `/services/${service.slug}`),
];
test("all service pages have distinct server HTML metadata and useful scoped content", async ({
  page,
  request,
}, testInfo) => {
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  for (const path of pages) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    expect(response?.headers()["x-robots-tag"]).toContain("noindex");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
    const title = await page.title();
    expect(titles.has(title)).toBe(false);
    titles.add(title);
    const description = (await page
      .locator('meta[name="description"]')
      .getAttribute("content"))!;
    expect(descriptions.has(description)).toBe(false);
    descriptions.add(description);
    const html = await (await request.get(path)).text();
    expect(html).toContain("Frequently asked questions");
    expect(html).not.toContain("This is a route scaffold");
    await expect(
      page.locator('script[type="application/ld+json"]'),
    ).toHaveCount(0);
    if (testInfo.project.name === "desktop")
      await expect(
        page
          .getByRole("navigation", { name: "Primary" })
          .getByRole("link", { name: "Services", exact: true }),
      ).toHaveAttribute("aria-current", "page");
    const links = await page
      .locator("main a[href]")
      .evaluateAll((elements) => [
        ...new Set(elements.map((element) => element.getAttribute("href")!)),
      ]);
    for (const href of links) {
      if (href.startsWith("#")) await expect(page.locator(href)).toHaveCount(1);
      else expect((await request.get(href)).status()).toBe(200);
    }
    for (const width of [1440, 1280, 1024, 768, 390, 375]) {
      await page.setViewportSize({ width, height: 900 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${path} at ${width}px`,
      ).toBe(true);
    }
    await page.setViewportSize(
      testInfo.project.name === "mobile"
        ? { width: 390, height: 844 }
        : { width: 1440, height: 1000 },
    );
    await page.screenshot({
      path: testInfo.outputPath(`${path.split("/").pop()}-first-fold.png`),
    });
    await page.screenshot({
      path: testInfo.outputPath(`${path.split("/").pop()}.png`),
      fullPage: true,
    });
  }
  expect((await request.get("/services/not-a-service")).status()).toBe(404);
});

test("every FAQ responds to keyboard and pointer with correct accessible state", async ({
  page,
}) => {
  for (const path of pages) {
    await page.goto(path);
    const questions = page.locator(".faq-item button");
    expect(await questions.count()).toBeGreaterThanOrEqual(4);
    for (const question of await questions.all()) {
      const id = await question.getAttribute("aria-controls");
      const answer = page.locator(`[id="${id}"]`);
      await expect(question).toHaveAttribute("aria-expanded", "false");
      await expect(answer).toBeHidden();
      await question.focus();
      await page.keyboard.press("Enter");
      await expect(question).toHaveAttribute("aria-expanded", "true");
      await expect(answer).toBeVisible();
      await page.keyboard.press("Space");
      await expect(answer).toBeHidden();
      await question.click();
      await expect(answer).toBeVisible();
      await question.click();
      await expect(question).toHaveAttribute("aria-expanded", "false");
    }
  }
});

test("four overview destinations and distinct service structures are complete", async ({
  page,
}) => {
  await page.goto("/services");
  await expect(page.locator(".catalog-card")).toHaveCount(4);
  for (const service of serviceDetails) {
    await page
      .getByRole("link", { name: `Find out more about ${service.title}` })
      .click();
    await expect(page.locator(".benefit-band > div")).toHaveCount(4);
    await expect(page.locator(".four-steps > li")).toHaveCount(4);
    await expect(page.locator(".solutions-grid > article")).toHaveCount(6);
    await expect(page.locator(".service-scope")).toContainText(
      service.boundary,
    );
    await page
      .getByRole("link", { name: "Start a project", exact: true })
      .click();
    await expect(page).toHaveURL(
      new RegExp(`/contact\\?interest=${service.slug}$`),
    );
    await expect(
      page.getByText("Enquiries cannot be submitted here yet.", {
        exact: false,
      }),
    ).toBeVisible();
    await page.goto("/services");
  }
});
