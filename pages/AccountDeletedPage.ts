import { Page, expect } from '@playwright/test';

export class AccountDeletedPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get deleteMessage() {
    return this.page.locator('b').filter({ hasText: 'Account Deleted!' });
  }

  private get continueButton() {
    return this.page.locator('[data-qa="continue-button"]');
  }

  async verifyAccountDeleted() {
    await expect(this.deleteMessage).toBeVisible();
  }

  async clickContinue() {
    await this.continueButton.click();
  }
}
