import { Page, expect } from '@playwright/test';

export class InventoryPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get inventoryList() {
    return this.page.locator('[data-test="inventory-list"]');
  }

  private get cartButton() {
    return this.page.locator('[data-test="shopping-cart-link"]');
  }

  private get cartBadge() {
    return this.page.locator('[data-test="shopping-cart-badge"]');
  }

  private get menuButton() {
    return this.page.locator('[data-test="react-burger-menu-btn"]');
  }

  private get logoutButton() {
    return this.page.locator('[data-test="logout-sidebar-link"]');
  }

  private addToCartButton(productName: string) {
    return this.page.locator(`[data-test="add-to-cart-${productName.toLowerCase().replace(/ /g, '-')}"]`);
  }

  private removeFromCartButton(productName: string) {
    return this.page.locator(`[data-test="remove-${productName.toLowerCase().replace(/ /g, '-')}"]`);
  }

  async verifyInventoryPageIsVisible() {
    await expect(this.inventoryList).toBeVisible();
    await expect(this.cartButton).toBeVisible();
  }

  async addProductToCart(productName: string) {
    await this.addToCartButton(productName).click();
  }

  async verifyProductAddedToCart(productName: string) {
    await expect(this.removeFromCartButton(productName)).toBeVisible();
  }

  async verifyCartBadgeCount(count: number) {
    await expect(this.cartBadge).toHaveText(count.toString());
  }

  async goToCart() {
    await this.cartButton.click();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutButton.click();
  }
}
