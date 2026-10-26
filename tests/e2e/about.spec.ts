import { test, expect } from "@playwright/test";
import { loadVisualImages } from "./visual-images";

test("About has crawlable studio content, honest identity and complete internal links", async ({
  page,
  request,
}, testInfo) => {
  const response = await page.goto("/about");
  expect(response?.status()).toBe(200);
  expect(response?.headers()["x-robots-tag"]).toContain("noindex");
  await expect(page.locator("h1")).toHaveText(
    "Independentthinking.Better learning.",
  );
  await expect(page).toHaveTitle(
    "About Butter | Independent digital learning studio in Devon",
  );
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /Devon/,
  );
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex/,
  );
  const html = await (await request.get("/about")).text();
  expect(html).toContain("Pedagogy first");
  expect(html).not.toContain("This is a route scaffold");
  await expect(page.locator(".about-principles li")).toHaveCount(5);
  await expect(page.locator(".about-process .process-grid li")).toHaveCount(3);
  const region = page.locator(".about-location");
  await expect(region).toContainText("Devon is Butter’s base");
  await expect(region).toContainText("South West");
  await expect(region).toContainText("UK-wide remote commissions");
  await expect(
    page.getByRole("img", {
      name: "Founder of Butter",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.locator(".about-founder")).toContainText(
    "more than 20 years of experience",
  );
  await expect(page.locator(".about-founder")).toContainText(
    "CIEH Professional Trainer Certificate",
  );
  await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(
    0,
  );
  const copy = await page.locator("main").innerText();
  for (const invented of [
    "Exeter",
    "Plymouth",
    "20+",
    "award-winning",
    "Google Business Profile",
    "our offices",
  ])
    expect(copy).not.toContain(invented);
  const links = await page
    .locator("main a[href]")
    .evaluateAll((elements) => [
      ...new Set(elements.map((element) => element.getAttribute("href")!)),
    ]);
  for (const href of links)
    expect((await request.get(href)).status()).toBe(200);
  expect((await request.get("/elearning-design-devon")).status()).toBe(404);
  expect(await (await request.get("/sitemap.xml")).text()).not.toContain(
    "elearning-design-devon",
  );
  for (const width of [1440, 1280, 1024, 768, 390, 375]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `About at ${width}px`,
    ).toBe(true);
  }
  await page.setViewportSize(
    testInfo.project.name === "mobile"
      ? { width: 390, height: 844 }
      : { width: 1440, height: 1000 },
  );
  await loadVisualImages(page);
  await page.screenshot({ path: testInfo.outputPath("about-first-fold.png") });
  await page.screenshot({
    path: testInfo.outputPath("about-full.png"),
    fullPage: true,
  });
});

test("About navigation and CTA work with keyboard and mobile menu", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  if (testInfo.project.name === "mobile")
    await page.getByRole("button", { name: "Open menu" }).click();
  const navigation = page.getByRole("navigation", {
    name: testInfo.project.name === "mobile" ? "Mobile" : "Primary",
    exact: true,
  });
  await navigation.getByRole("link", { name: "About", exact: true }).click();
  await expect(page).toHaveURL(/\/about$/);
  if (testInfo.project.name === "mobile")
    await page.getByRole("button", { name: "Open menu" }).click();
  await expect(
    navigation.getByRole("link", { name: "About", exact: true }),
  ).toHaveAttribute("aria-current", "page");
  if (testInfo.project.name === "mobile") await page.keyboard.press("Escape");
  const contact = page
    .locator(".about-hero")
    .getByRole("link", { name: "Let’s talk", exact: true });
  await contact.focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/contact$/);
  await expect(
    page.getByText("Online enquiries are not available yet.", { exact: false }),
  ).toBeVisible();
});
