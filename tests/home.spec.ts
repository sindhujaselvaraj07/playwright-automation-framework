import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Open Jupiter Toys Home Page', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigateToHomePage();

  await expect(page).toHaveTitle(/Jupiter Toys/);
});