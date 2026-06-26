import { Page, expect } from '@playwright/test';

export class CartPage {

    constructor(private page: Page) {}

    async getPrice(product: string): Promise<number> {
        const price = await this.page
            .locator(`tr:has-text("${product}") td`)
            .nth(1)
            .textContent();

        return Number(price?.replace('$', ''));
    }

    async getSubtotal(product: string): Promise<number> {
        const subtotal = await this.page
            .locator(`tr:has-text("${product}") td`)
            .nth(3)
            .textContent();

        return Number(subtotal?.replace('$', ''));
    }

    async getTotal(): Promise<number> {
        const total = await this.page.locator('strong.total').textContent();

        return Number(
            total?.replace('Total: ', '').replace('$', '')
        );
    }

    async verifyPrice(product: string, expectedPrice: number) {
        const actualPrice = await this.getPrice(product);

        expect(actualPrice).toBe(expectedPrice);
    }

    async verifySubtotal(product: string, quantity: number) {
        const price = await this.getPrice(product);

        const subtotal = await this.getSubtotal(product);

        expect(subtotal).toBe(price * quantity);
    }

    async verifyGrandTotal() {

        const frogSubtotal = await this.getSubtotal('Stuffed Frog');

        const bunnySubtotal = await this.getSubtotal('Fluffy Bunny');

        const bearSubtotal = await this.getSubtotal('Valentine Bear');

        const expectedTotal =
            frogSubtotal + bunnySubtotal + bearSubtotal;

        const actualTotal = await this.getTotal();

        expect(actualTotal).toBe(expectedTotal);
    }
}