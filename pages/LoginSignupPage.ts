import { Page, expect } from '@playwright/test';

export class LoginSignupPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Login form
  private get loginEmailInput() {
    return this.page.locator('input[data-qa="login-email"]');
  }

  private get loginPasswordInput() {
    return this.page.locator('input[data-qa="login-password"]');
  }

  private get loginButton() {
    return this.page.locator('button[data-qa="login-button"]');
  }

  private get loginErrorMessage() {
    return this.page.locator('p[style="color: red;"]');
  }

  // Signup form
  private get signupNameInput() {
    return this.page.locator('input[data-qa="signup-name"]');
  }

  private get signupEmailInput() {
    return this.page.locator('input[data-qa="signup-email"]');
  }

  private get signupButton() {
    return this.page.locator('button[data-qa="signup-button"]');
  }

  async fillLoginForm(email: string, password: string) {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async fillSignupForm(name: string, email: string) {
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
  }

  async clickSignup() {
    await this.signupButton.click();
  }

  async verifyLoginErrorMessage(message: string) {
    await expect(this.loginErrorMessage).toHaveText(message);
  }
}
