import { Page, expect } from '@playwright/test';

export class CartPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get cartTable() {
    return this.page.locator('#cart_info_table');
  }

  private get proceedToCheckoutButton() {
    return this.page.locator('.check_out');
  }

  async verifyCartPageIsVisible() {
    await expect(this.cartTable).toBeVisible();
  }

  async verifyProductInCart(productName: string) {
    await expect(this.page.locator('.cart_description a').filter({ hasText: productName })).toBeVisible();
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutButton.click();
  }
}
