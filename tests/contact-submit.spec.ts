import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';

test.describe('Test Case 2 - Contact Form Submission', () => {

    for (let i = 1; i <= 5; i++) {

        test(`Successful submission - Run ${i}`, async ({ page }) => {

            const home = new HomePage(page);
            const contact = new ContactPage(page);

            await home.navigateToHomePage();

            await home.clickContactMenu();

            await contact.fillMandatoryFields(
                'Sindhuja',
                'sindhuja@test.com',
                'Playwright Automation Assessment'
            );

            await contact.clickSubmit();

            await contact.verifySuccessMessage();

        });

    }

});