import { test, expect } from "@playwright/test";

// test.beforeEach(async ({ page }) => {
//   await page.goto("https://admin-staging.aonewallet.com/");
//   await page.goto("https://admin-staging.aonewallet.com/signin");
//   await page.locator(`//div[text()='Dashboard']`).isVisible;
// });

test("admin log in", async ({ page }) => {
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
  await page.locator(`//button[text()='Create New Mail']`).click();
  await page.locator(`(//input[@class='ant-input'])[2]`).type("PearlMail");
  await page.locator(`//textarea[@class='ant-input']`).type("Hi");
  await page.locator(`//span[text()='Submit']`).click();
});

//   page.locator(`//div[text()='Dashboard']`).isVisible;
//   await page.locator(`(//div[@title='System Message'])[2]`).isVisible();
//   await page.waitForLoadState();
//   await page.locator(`(//div[@title='System Message'])[2]`).click();
//   await page.route(`**graphql?totalOnlineMembersCount`, (route) =>
//     route.fulfill({
//       status: 200,
//     })
//   );
//   await page.locator(`//ul[@id='system-message$Menu']//li[1]`).click();
// });

// test("admin views system message", async ({ page }) => {
//   await page.locator(`(//div[@title='System Message'])[2]`).isVisible();
//   await page.locator(`(//div[@title='System Message'])[2]`).click();
//   await page.locator(`//ul[@id='system-message$Menu']//li[1]`).click();
// });
