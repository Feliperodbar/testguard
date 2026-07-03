import { test, expect } from '../fixtures/testFixtures';
import testData from '../data/testData.json';

test.describe('Checkout Happy Path', () => {
  test('should_complete_checkout_successfully', async ({ loginPage, inventoryPage, cartPage, checkoutPage }) => {
    await loginPage.navigate();
    await loginPage.login(testData.users.standard.username, testData.users.standard.password);
    await inventoryPage.verifyInventoryPageIsVisible();

    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.verifyProductAddedToCart('Sauce Labs Backpack');
    await inventoryPage.verifyCartBadgeCount(1);

    await inventoryPage.addProductToCart('Sauce Labs Bike Light');
    await inventoryPage.verifyProductAddedToCart('Sauce Labs Bike Light');
    await inventoryPage.verifyCartBadgeCount(2);

    await inventoryPage.goToCart();
    await cartPage.verifyCartPageIsVisible();
    await cartPage.verifyProductInCart('Sauce Labs Backpack');
    await cartPage.verifyProductInCart('Sauce Labs Bike Light');

    await cartPage.goToCheckout();
    await checkoutPage.verifyCheckoutPageIsVisible();

    await checkoutPage.fillCheckoutForm(
      testData.checkout.firstName,
      testData.checkout.lastName,
      testData.checkout.postalCode
    );
    await checkoutPage.clickContinue();
    await checkoutPage.clickFinish();
    await checkoutPage.verifySuccessMessage();
  });
});
