import { Page } from '@playwright/test';

export class HomePage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Open the application
    async navigateToHomePage() {
        await this.page.goto('http://jupiter.cloud.planittesting.com');
    }

    // Click the Contact menu
    async clickContactMenu() {
        await this.page.getByRole('link', { name: 'Contact' }).click();
    }

    // Click the Shop menu
   async clickShopMenu() {
    await this.page.getByRole('link', {
        name: 'Shop',
        exact: true
    }).click();
}

    // Click the Cart menu
    async clickCartMenu() {
        await this.page.getByRole('link', { name: 'Cart' }).click();
    }
}