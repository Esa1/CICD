// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3001/');

  // Expect a title "to contain" a substring.
//  await expect(page).toHaveTitle(/Simple todo list/);
  await expect(page.getByTestId('app-title')).toHaveText('Simple todo list');
});
/*
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});*/
