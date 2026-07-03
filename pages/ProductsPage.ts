import { Page, expect } from '@playwright/test';

export class ProductsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get productsList() {
    return this.page.locator('.features_items');
  }

  private get continueShoppingButton() {
    return this.page.locator('.modal-content .btn-success');
  }

  private get viewCartButton() {
    return this.page.locator('.modal-content a[href="/view_cart"]');
  }

  private get searchInput() {
    return this.page.locator('#search_product');
  }

  private get searchButton() {
    return this.page.locator('#submit_search');
  }

  private get searchedProductsTitle() {
    return this.page.locator('h2.title.text-center').filter({ hasText: 'Searched Products' });
  }

  addToCartButton(productIndex: number) {
    return this.page.locator('.overlay-content .btn').nth(productIndex);
  }

  product(productIndex: number) {
    return this.page.locator('.product-image-wrapper').nth(productIndex);
  }

  async verifyProductsPageIsVisible() {
    await expect(this.productsList).toBeVisible();
  }

  async hoverOverProduct(productIndex: number) {
    await this.product(productIndex).hover();
  }

  async addProductToCart(productIndex: number) {
    await this.hoverOverProduct(productIndex);
    await this.addToCartButton(productIndex).click();
  }

  async clickContinueShopping() {
    await this.continueShoppingButton.click();
  }

  async clickViewCart() {
    await this.viewCartButton.click();
  }

  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async verifySearchedProductsVisible() {
    await expect(this.searchedProductsTitle).toBeVisible();
  }

  async verifyProductInSearchResults(productName: string) {
    await expect(this.page.locator('.productinfo p').filter({ hasText: productName }).first()).toBeVisible();
  }
}
