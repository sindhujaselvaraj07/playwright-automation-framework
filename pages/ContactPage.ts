import { Page, expect } from '@playwright/test';

export class ContactPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    private forename = '#forename';
    private surname = '#surname';
    private email = '#email';
    private telephone = '#telephone';
    private message = '#message';
    private submitButton = 'text=Submit';

    private forenameError = '#forename-err';
    private emailError = '#email-err';
    private messageError = '#message-err';

    private successMessage = '.alert-success';

    // Fill fields
    async enterForename(name: string) {
        await this.page.locator(this.forename).fill(name);
    }

    async enterSurname(name: string) {
        await this.page.locator(this.surname).fill(name);
    }

    async enterEmail(email: string) {
        await this.page.locator(this.email).fill(email);
    }

    async enterTelephone(phone: string) {
        await this.page.locator(this.telephone).fill(phone);
    }

    async enterMessage(msg: string) {
        await this.page.locator(this.message).fill(msg);
    }

    async fillMandatoryFields(forename: string, email: string, message: string) {
     
    console.log("Entering mandatory fields...");

    await this.enterForename(forename);
    console.log("Forename entered");

    await this.enterEmail(email);
    console.log("Email entered");

    await this.enterMessage(message);
    console.log("Message entered");
    }

    // Click Submit
async clickSubmit() {

    await this.page.getByRole('link', {
        name: 'Submit'
    }).click();

    

}

    // Verify validation errors
    async verifyMandatoryFieldErrors() {
        await expect(this.page.locator(this.forenameError))
            .toHaveText('Forename is required');

        await expect(this.page.locator(this.emailError))
            .toHaveText('Email is required');

        await expect(this.page.locator(this.messageError))
            .toHaveText('Message is required');
    }

    // Verify errors disappear
    async verifyErrorsAreGone() {
        await expect(this.page.locator(this.forenameError)).toBeHidden();
        await expect(this.page.locator(this.emailError)).toBeHidden();
        await expect(this.page.locator(this.messageError)).toBeHidden();
    }
async waitForFeedbackToFinish() {

    await this.page.getByRole('heading', {
        name: 'Sending Feedback'
    }).waitFor();

    await this.page.getByRole('heading', {
        name: 'Sending Feedback'
    }).waitFor({
        state: 'hidden',
        timeout: 30000
    });

}
    // Verify successful submission
async verifySuccessMessage() {

    const success = this.page.locator('.alert-success');

    await expect(success).toBeVisible({
        timeout: 30000
    });

    

    await expect(success).toContainText('Thanks');
}
    }
