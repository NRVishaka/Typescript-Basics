// const { chromium } = require('playwright');
// (async () => {
//   const browser = await chromium.launch({
//     headless: false, // Set to true if you don't want to see the browser
//     channel: 'chrome' // Launch Google Chrome instead of Chromium   });
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto('https://www.google.com');
//   await browser.close();  })();


import { test, expect } from '@playwright/test';
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  // Expects page to have a heading with the name of HTML Test Reports. added by vish
  await expect(page.getByRole('heading', { name: 'HTML Test Reports' })).toBeVisible();
});

// y the belo test is not working ,search for a word in the page
// test('get chromium', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();
//   // Expects page to have a para with theword chromium .
//   await expect(page.locator('p')).toContainText('chromium');  await expect(page).toHaveText(/chromium/i);  });


