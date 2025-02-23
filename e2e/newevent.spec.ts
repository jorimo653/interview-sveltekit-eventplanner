import test, { expect } from "@playwright/test";

test("Submitting a past date results in error alert", async ({ page }) => {
  const eventTitle = "New Years Eve";
  const eventDesc = "Celebrating the new year with friends";
  const eventDate = "1926-01-01T00:00";

  await page.goto("/newevent");
  await page.getByTestId("event-input-title").fill(eventTitle);
  await page.getByTestId("event-input-description").fill(eventDesc);
  await page.getByTestId("event-input-date").fill(eventDate);

  await page.getByTestId("event-submit-btn").click();
  const errorAlert = await page.getByTestId("error-alert");
  expect(errorAlert).toBeVisible();
});
