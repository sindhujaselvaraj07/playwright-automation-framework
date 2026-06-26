import { Page } from '@playwright/test';

export class ShopPage {

    constructor(private page: Page) {}

    async buyProduct(productName: string, quantity: number) 
    {

        const product = this.page.locator('.product').filter({
            hasText: productName
        });

        for (let i = 0; i < quantity; i++) {
            await product.getByRole('link', { name: 'Buy' }).click();
        }
    }

    async goToCart() {
        await this.page.getByRole('link', { name: 'Cart' }).click();
    }

}