import test, { expect } from "@playwright/test";

test.describe("Homepage Navigation", () => {
  test("should load the homepage and show the correct file", async ({
    page,
  }) => {
    // 1. Go to the homepage (URL is '/' because we set the 'baseURL'
    //    or 'webServer' url in the config)
    await page.goto("/");

    // 2. Find the H1 heading with the specific name
    const heading = page.getByRole("heading", { name: "Page 1 Homepage" });

    // 3. Assert (or 'expect') that this heading is visible on the page
    await expect(heading).toBeVisible();
  });
});
