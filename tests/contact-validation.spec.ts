import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';

test('Test Case 1 - Validate mandatory fields', async ({ page }) => {

    const homePage = new HomePage(page);
    const contactPage = new ContactPage(page);

    // Open application
    await homePage.navigateToHomePage();

    // Go to Contact page
    await homePage.clickContactMenu();

    // Click Submit
    await contactPage.clickSubmit();

    // Verify validation errors
    await contactPage.verifyMandatoryFieldErrors();

    // Fill mandatory fields
    await contactPage.fillMandatoryFields(
        'Sindhuja',
        'sindhuja@test.com',
        'Playwright Assessment'
    );

    // Verify errors disappear
    await contactPage.verifyErrorsAreGone();

});