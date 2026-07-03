import { test, expect } from '../fixtures/testFixtures';
import testData from '../data/testData.json';

test.describe('Search Tests', () => {
  test('should search for product successfully', async ({ homePage, productsPage }) => {
    await homePage.navigate();
    await homePage.goToProducts();

    await productsPage.verifyProductsPageIsVisible();
    await productsPage.searchProduct(testData.search.product);
    await productsPage.verifySearchedProductsVisible();
    await productsPage.verifyProductInSearchResults(testData.search.product);
  });
});
