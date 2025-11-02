import test, { expect } from "@playwright/test";

test.describe("Page C", () => {
  test("should load the page with correct heading and button", async ({
    page,
  }) => {
    await page.goto("/page-c");

    // Check that the heading is visible
    const heading = page.getByRole("heading", { name: "Page C" });
    await expect(heading).toBeVisible();

    // Check that the button is visible and shows initial text
    const button = page.getByRole("button", { name: "Click me" });
    await expect(button).toBeVisible();
  });

  test("should toggle button text when clicked", async ({ page }) => {
    await page.goto("/page-c");

    const button = page.getByRole("button");

    // Initially should show "Click me"
    await expect(button).toHaveText("Click me");

    // Click the button
    await button.click();

    // Should now show "Clicked"
    await expect(button).toHaveText("Clicked");

    // Click again
    await button.click();

    // Should toggle back to "Click me"
    await expect(button).toHaveText("Click me");
  });

  test("should handle multiple clicks correctly", async ({ page }) => {
    await page.goto("/page-c");

    const button = page.getByRole("button");

    // Click multiple times and verify the toggle behavior
    await button.click();
    await expect(button).toHaveText("Clicked");

    await button.click();
    await expect(button).toHaveText("Click me");

    await button.click();
    await expect(button).toHaveText("Clicked");
  });
});
