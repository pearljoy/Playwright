import { test, expect } from "@playwright/test";

test("admin views system message", async ({ page }) => {
  await page.goto("https://admin-staging.aonewallet.com/");
  await page.goto("https://admin-staging.aonewallet.com/signin");
  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").fill("admin88");
  await page.getByPlaceholder("Password").fill("password");
  await page.getByRole("button", { name: "Signin" }).click();
  await expect(page).toHaveURL("https://admin-staging.aonewallet.com/signin");
  await page.getByRole("button", { name: "···" }).click();
  await page
    .getByRole("button", { name: "System Message" })
    .filter({ hasText: "System Message" })
    .click();
  await page.getByText("Manual Message").click();
});
