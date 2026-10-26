import { test, expect } from "@playwright/test";
import { loadVisualImages } from "./visual-images";

test("spacing review keeps layouts usable across desktop and mobile", async ({
  page,
}, testInfo) => {
  for (const [name, route] of [
    ["home", "/"],
    ["work", "/work"],
    ["case-study", "/work/information-security"],
  ]) {
    await page.goto(route);
    await expect(page.locator("h1")).toHaveCount(1);
    for (const width of [1440, 1280, 1024, 768, 390, 375]) {
      await page.setViewportSize({ width, height: 1000 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${route} at ${width}px`,
      ).toBe(true);
    }
    await page.setViewportSize(
      testInfo.project.name === "mobile"
        ? { width: 390, height: 844 }
        : { width: 1440, height: 1000 },
    );
    await loadVisualImages(page);
    if (name === "home")
      await expect(page.locator(".work-card")).toHaveCount(3);
    if (name === "case-study") {
      await expect(page.locator(".case-proof > div")).toHaveCount(4);
      await expect(page.locator(".case-gallery")).toHaveCount(0);
    }
    await page.screenshot({
      path: testInfo.outputPath(`${name}.png`),
      fullPage: true,
    });
  }
});
