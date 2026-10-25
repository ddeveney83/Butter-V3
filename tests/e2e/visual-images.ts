import { expect, type Page } from "@playwright/test";

// Full-page captures should show lazy off-screen images, not their loading state.
export async function loadVisualImages(page: Page) {
  const images = page.locator("img");
  await images.evaluateAll((elements) =>
    elements.forEach((element) => {
      (element as HTMLImageElement).loading = "eager";
    }),
  );
  for (const image of await images.all()) {
    await expect
      .poll(
        () =>
          image.evaluate(
            (element) =>
              (element as HTMLImageElement).complete &&
              (element as HTMLImageElement).naturalWidth > 0,
          ),
        { timeout: 15000 },
      )
      .toBe(true);
  }
}
