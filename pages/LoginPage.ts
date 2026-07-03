import { Page, expect } from '@playwright/test';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get usernameInput() {
    return this.page.locator('[data-test="username"]');
  }

  private get passwordInput() {
    return this.page.locator('[data-test="password"]');
  }

  private get loginButton() {
    return this.page.locator('[data-test="login-button"]');
  }

  private get errorMessage() {
    return this.page.locator('[data-test="error"]');
  }

  async navigate() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyErrorMessage(message: string) {
    await expect(this.errorMessage).toHaveText(message);
  }

  async verifyLoginPageIsVisible() {
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }
}
