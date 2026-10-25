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
  expect(await response.text()).toContain("Learning,");
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  if (test.info().project.name === "mobile")
    await page.getByRole("button", { name: "Open menu" }).click();
  await page
    .getByRole("navigation", {
      name: test.info().project.name === "mobile" ? "Mobile" : "Primary",
    })
    .getByRole("link", { name: "Services", exact: true })
    .click();
  await expect(page).toHaveURL(/\/services$/);
  if (test.info().project.name === "mobile")
    await page.getByRole("button", { name: "Open menu" }).click();
  await page
    .getByRole("banner")
    .getByRole("link", { name: "Let’s talk", exact: false })
    .click();
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
test("capture Phase 1 homepage evidence", async ({ page }, testInfo) => {
  await page.goto("/");
  await page.screenshot({
    path: testInfo.outputPath("phase-1-first-fold.png"),
  });
  await page.screenshot({
    path: testInfo.outputPath("phase-1-home.png"),
    fullPage: true,
  });
});

test("mobile menu traps focus, restores scrolling and closes with Escape or navigation", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "Mobile interaction only");
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await toggle.click();
  const dialog = page.getByRole("dialog", { name: "Site navigation" });
  await expect(dialog).toBeVisible();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("button", { name: "Close menu" })).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(dialog.getByRole("link", { name: "Let’s talk" })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("button", { name: "Close menu" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(toggle).toBeFocused();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
  await toggle.click();
  await dialog.getByRole("link", { name: "Services", exact: true }).click();
  await expect(page).toHaveURL(/\/services$/);
  await expect(dialog).not.toBeVisible();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
});

test("home links resolve, proof is honest and all required widths reflow", async ({
  page,
  request,
}) => {
  await page.goto("/");
  const paths = await page
    .locator("main a[href]")
    .evaluateAll((links) => [
      ...new Set(links.map((link) => link.getAttribute("href")!)),
    ]);
  for (const path of paths)
    expect((await request.get(path)).status()).toBe(200);
  const text = await page.locator("main").innerText();
  for (const unverified of ["13,000+", "93%", "20+", "British Red Cross"])
    expect(text).not.toContain(unverified);
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
    await expect(page.locator("h1")).toBeVisible();
  }
});
