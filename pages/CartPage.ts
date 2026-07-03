import { Page, expect } from '@playwright/test';

export class CartPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get cartList() {
    return this.page.locator('[data-test="cart-list"]');
  }

  private get checkoutButton() {
    return this.page.locator('[data-test="checkout"]');
  }

  private get continueShoppingButton() {
    return this.page.locator('[data-test="continue-shopping"]');
  }

  private cartItem(productName: string) {
    return this.page.locator('[data-test="inventory-item-name"]').filter({ hasText: productName });
  }

  async verifyCartPageIsVisible() {
    await expect(this.cartList).toBeVisible();
    await expect(this.checkoutButton).toBeVisible();
  }

  async verifyProductInCart(productName: string) {
    await expect(this.cartItem(productName)).toBeVisible();
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }
}
