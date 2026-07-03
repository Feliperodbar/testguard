import { test, expect } from '../fixtures/testFixtures';

test.describe('Add to Cart Tests', () => {
  test('should add products to cart', async ({ homePage, productsPage, cartPage }) => {
    await homePage.navigate();
    await homePage.goToProducts();
    
    await productsPage.verifyProductsPageIsVisible();
    
    await productsPage.addProductToCart(0);
    await productsPage.clickContinueShopping();
    
    await productsPage.addProductToCart(1);
    await productsPage.clickViewCart();
    
    await cartPage.verifyCartPageIsVisible();
    await cartPage.verifyProductInCart('Blue Top');
    await cartPage.verifyProductInCart('Men Tshirt');
  });
});
