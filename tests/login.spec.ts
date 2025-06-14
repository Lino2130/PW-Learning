import { test } from '@playwright/test';

test('Login successful with valid credentials', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  // ...
});
