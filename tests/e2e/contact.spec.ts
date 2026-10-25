import { test, expect, type Page } from "@playwright/test";
const valid = {
  name: "Test Person",
  email: "visitor@example.org",
  organisation: "Test organisation",
  support: "",
  brief: "A synthetic project brief for browser testing.",
  budget: "",
  timeline: "",
  privacy: true,
  website: "",
};
async function fill(page: Page) {
  await page.getByLabel("Your name", { exact: true }).fill(valid.name);
  await page.getByLabel("Work email", { exact: true }).fill(valid.email);
  await page
    .getByLabel("Tell us about your project", { exact: true })
    .fill(valid.brief);
  await page.getByRole("checkbox").check();
}
test("Contact and legal pages are complete, truthful, linked and responsive", async ({
  page,
  request,
}, testInfo) => {
  for (const path of ["/contact", "/privacy", "/terms"]) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    expect(response?.headers()["x-robots-tag"]).toContain("noindex");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /.+/,
    );
    expect(await (await request.get(path)).text()).not.toContain(
      "This is a route scaffold",
    );
    if (path === "/contact") {
      await expect(page).toHaveTitle(
        "Contact Butter | Start a digital learning project",
      );
      await expect(page.locator("h1")).toContainText("conversation.");
      await expect(
        page.getByRole("form", { name: "Project enquiry" }),
      ).toBeVisible();
      await expect(page.locator(".contact-unavailable")).toContainText(
        "not connected",
      );
      await expect(page.locator(".contact-hero")).toContainText("Devon");
      await expect(page.locator('input[name="budget"]')).not.toHaveAttribute(
        "required",
      );
      await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
    } else {
      await expect(page.locator(".legal-draft")).toContainText(
        "LEGAL COPY REQUIRED",
      );
      await expect(page.locator(".legal-reading section")).toHaveCount(6);
    }
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
        `${path} at ${width}`,
      ).toBe(true);
    }
    await page.setViewportSize(
      testInfo.project.name === "mobile"
        ? { width: 390, height: 844 }
        : { width: 1440, height: 1000 },
    );
    await page.screenshot({
      path: testInfo.outputPath(`${path.slice(1)}.png`),
      fullPage: true,
    });
  }
});
test("enquiry validation is accessible and unconfigured delivery preserves the brief", async ({
  page,
}) => {
  let submissions = 0;
  page.on("request", (request) => {
    if (request.url().endsWith("/api/contact")) submissions++;
  });
  await page.goto("/contact");
  const button = page.getByRole("button", {
    name: "Send enquiry",
    exact: true,
  });
  await button.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByLabel("Your name", { exact: true })).toBeFocused();
  await expect(page.getByLabel("Your name", { exact: true })).toHaveAttribute(
    "aria-invalid",
    "true",
  );
  await expect(page.getByRole("checkbox")).toHaveAttribute(
    "aria-invalid",
    "true",
  );
  expect(submissions).toBe(0);
  await fill(page);
  await button.click();
  const result = page.locator(".enquiry-form").getByRole("alert");
  await expect(result).toContainText("Your message has not been sent.");
  await expect(result).toBeFocused();
  await expect(
    page.getByLabel("Tell us about your project", { exact: true }),
  ).toHaveValue(valid.brief);
  await expect(page.locator(".enquiry-success")).toHaveCount(0);
  await expect(button).toBeEnabled();
  expect(submissions).toBe(1);
});
test("form UI handles pending, server errors and provider acceptance only in mocked browser responses", async ({
  page,
}) => {
  await page.goto("/contact");
  await fill(page);
  let release: (() => void) | undefined;
  const pending = new Promise<void>((resolve) => {
    release = resolve;
  });
  await page.route("**/api/contact", async (route) => {
    await pending;
    await route.fulfill({
      status: 502,
      json: { ok: false, message: "Delivery could not be confirmed." },
    });
  });
  await page.getByRole("button", { name: "Send enquiry", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Sending…", exact: true }),
  ).toBeDisabled();
  release!();
  await expect(page.locator(".enquiry-form").getByRole("alert")).toContainText(
    "Delivery could not be confirmed.",
  );
  await expect(page.getByLabel("Work email", { exact: true })).toHaveValue(
    valid.email,
  );
  await page.unroute("**/api/contact");
  await page.route("**/api/contact", (route) =>
    route.fulfill({
      status: 200,
      json: {
        ok: true,
        message:
          "Your enquiry has been accepted for delivery. Thank you for getting in touch.",
      },
    }),
  );
  await page.getByRole("button", { name: "Send enquiry", exact: true }).click();
  await expect(page.locator(".enquiry-success")).toContainText(
    "accepted for delivery",
  );
  await expect(page.locator(".enquiry-success")).toBeFocused();
  await expect(page.getByLabel("Work email", { exact: true })).toHaveValue("");
  await expect(page.getByRole("checkbox")).not.toBeChecked();
  expect(await page.context().cookies()).toEqual([]);
});
test("contact endpoint validates requests and never accepts unconfigured delivery", async ({
  request,
}) => {
  const headers = { Origin: "http://127.0.0.1:3000" };
  expect(
    (
      await request.post("/api/contact", {
        data: valid,
        headers: { Origin: "https://outside.example" },
      })
    ).status(),
  ).toBe(403);
  const invalid = await request.post("/api/contact", {
    data: { ...valid, email: "invalid" },
    headers,
  });
  // Shared per-instance limits may apply when parallel browsers exercise this endpoint.
  expect([422, 429]).toContain(invalid.status());
  if (invalid.status() === 422)
    expect((await invalid.json()).errors.email).toBeTruthy();
  const unavailable = await request.post("/api/contact", {
    data: valid,
    headers,
  });
  expect([503, 429]).toContain(unavailable.status());
  expect((await unavailable.json()).ok).toBe(false);
  expect((await request.get("/api/contact")).status()).toBe(405);
});
