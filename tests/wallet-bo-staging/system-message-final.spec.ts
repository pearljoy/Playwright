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
  await page.getByRole("button", { name: "plus Create New Mail" }).click();
  await page
    .locator(
      ".ant-legacy-form-item-children > .ant-select > .ant-select-selector > .ant-select-selection-overflow"
    )
    .click();
  await page
    .getByTitle("acc_72349d1c1cb75b149a29fa726b02b533")
    .getByText("blockdeposit")
    .click();
  await page.locator(".ant-select-item").first().click();
  await page.locator("#rc_select_6").fill("");
  await page.getByText("Mail Title Name").click();
  await page.locator('input[name="mailTitle"]').click();
  await page.locator('input[name="mailTitle"]').fill("PearlMail2");
  await page.locator('textarea[name="mailContent"]').click();
  await page.locator('textarea[name="mailContent"]').fill("Hi");
  await page.getByRole("button", { name: "Submit" }).click();
});
