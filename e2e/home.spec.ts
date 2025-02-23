import { expect, test } from "@playwright/test";

test("home page has expected h1", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();
});

test("Clicking the 'Add Event' button navigates to the newevent route", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByTestId("add-event-btn").click();
  await page.waitForURL("**/newevent");
  expect(page.url()).toContain("/newevent");
});
