const playwright = require("playwright");

(async () => {
  // Launch a browser
  const browser = await playwright.chromium.launch();
  // Create a new context
  const context = await browser.newContext();
  // Create a new page
  const page = await context.newPage();
  // Navigate to the login page
  await page.goto("http://admin-staging.aonewallet.com/");
  // Find the login form
  const loginForm = await page.$("form[name=login]");
  // Enter the username and password
  await loginForm.fill("input[name=username]", "your_username");
  await loginForm.fill("input[name=password]", "your_password");
  // Submit the form
  await loginForm.submit();

  // Now you are signed in

  // Close the browser
  await browser.close();
})();
