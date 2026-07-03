import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get firstNameInput() {
    return this.page.locator('[data-test="firstName"]');
  }

  private get lastNameInput() {
    return this.page.locator('[data-test="lastName"]');
  }

  private get postalCodeInput() {
    return this.page.locator('[data-test="postalCode"]');
  }

  private get continueButton() {
    return this.page.locator('[data-test="continue"]');
  }

  private get finishButton() {
    return this.page.locator('[data-test="finish"]');
  }

  private get errorMessage() {
    return this.page.locator('[data-test="error"]');
  }

  private get successMessage() {
    return this.page.locator('[data-test="complete-header"]');
  }

  async verifyCheckoutPageIsVisible() {
    await expect(this.firstNameInput).toBeVisible();
    await expect(this.lastNameInput).toBeVisible();
    await expect(this.postalCodeInput).toBeVisible();
  }

  async fillCheckoutForm(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async clickFinish() {
    await this.finishButton.click();
  }

  async verifyErrorMessage(message: string) {
    await expect(this.errorMessage).toHaveText(message);
  }

  async verifySuccessMessage() {
    await expect(this.successMessage).toHaveText('Thank you for your order!');
  }
}
