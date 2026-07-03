import { Page, expect } from '@playwright/test';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get signupLoginButton() {
    return this.page.locator('a[href="/login"]');
  }

  private get productsButton() {
    return this.page.locator('a[href="/products"]');
  }

  private get cartButton() {
    return this.page.locator('a[href="/view_cart"]');
  }

  private get loggedInAs() {
    return this.page.locator('li a b');
  }

  private get deleteAccountButton() {
    return this.page.locator('a[href="/delete_account"]');
  }

  private get logoutButton() {
    return this.page.locator('a[href="/logout"]');
  }

  async navigate() {
    await this.page.goto('/');
  }

  async goToSignupLogin() {
    await this.signupLoginButton.click();
  }

  async goToProducts() {
    await this.productsButton.click();
  }

  async goToCart() {
    await this.cartButton.click();
  }

  async verifyLoggedInAs(username: string) {
    await expect(this.loggedInAs).toHaveText(username);
  }

  async logout() {
    await this.logoutButton.click();
  }

  async deleteAccount() {
    await this.deleteAccountButton.click();
  }
}
