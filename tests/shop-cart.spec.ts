import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ShopPage } from '../pages/ShopPage';
import { CartPage } from '../pages/CartPage';

test('Test Case 3 - Verify Cart', async ({ page }) => {

    const home = new HomePage(page);
    const shop = new ShopPage(page);
    const cart = new CartPage(page);

    // Open application
    await home.navigateToHomePage();

    // Navigate to Shop
    await home.clickShopMenu();

    // Buy products
    await shop.buyProduct('Stuffed Frog', 2);
    await shop.buyProduct('Fluffy Bunny', 5);
    await shop.buyProduct('Valentine Bear', 3);

    // Go to Cart
    await shop.goToCart();

    // Verify price of each product
    await cart.verifyPrice('Stuffed Frog', 10.99);
    await cart.verifyPrice('Fluffy Bunny', 9.99);
    await cart.verifyPrice('Valentine Bear', 14.99);

    // Verify subtotal of each product
    await cart.verifySubtotal('Stuffed Frog', 2);
    await cart.verifySubtotal('Fluffy Bunny', 5);
    await cart.verifySubtotal('Valentine Bear', 3);

    // Verify grand total
    await cart.verifyGrandTotal();

});