import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get deliveryAddress() {
    return this.page.locator('#address_delivery');
  }

  private get billingAddress() {
    return this.page.locator('#address_invoice');
  }

  private get cartItems() {
    return this.page.locator('#cart_info');
  }

  private get commentTextarea() {
    return this.page.locator('textarea.form-control');
  }

  private get placeOrderButton() {
    return this.page.locator('a[href="/payment"]');
  }

  private get nameOnCardInput() {
    return this.page.locator('[data-qa="name-on-card"]');
  }

  private get cardNumberInput() {
    return this.page.locator('[data-qa="card-number"]');
  }

  private get cvcInput() {
    return this.page.locator('[data-qa="cvc"]');
  }

  private get expiryMonthInput() {
    return this.page.locator('[data-qa="expiry-month"]');
  }

  private get expiryYearInput() {
    return this.page.locator('[data-qa="expiry-year"]');
  }

  private get payAndConfirmButton() {
    return this.page.locator('[data-qa="pay-button"]');
  }

  private get successMessage() {
    return this.page.locator('p').filter({ hasText: 'Congratulations! Your order has been confirmed!' });
  }

  async verifyCheckoutPageVisible() {
    await expect(this.deliveryAddress).toBeVisible();
    await expect(this.billingAddress).toBeVisible();
    await expect(this.cartItems).toBeVisible();
  }

  async fillComment(comment: string) {
    await this.commentTextarea.fill(comment);
  }

  async clickPlaceOrder() {
    await this.placeOrderButton.click();
  }

  async fillPaymentDetails(
    nameOnCard: string,
    cardNumber: string,
    cvc: string,
    expiryMonth: string,
    expiryYear: string
  ) {
    await this.nameOnCardInput.fill(nameOnCard);
    await this.cardNumberInput.fill(cardNumber);
    await this.cvcInput.fill(cvc);
    await this.expiryMonthInput.fill(expiryMonth);
    await this.expiryYearInput.fill(expiryYear);
  }

  async clickPayAndConfirm() {
    await this.payAndConfirmButton.click();
  }

  async verifyOrderSuccess() {
    await expect(this.successMessage).toBeVisible();
  }
}
