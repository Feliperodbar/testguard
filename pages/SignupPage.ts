import { Page, expect } from '@playwright/test';

export class SignupPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get titleMr() {
    return this.page.locator('#id_gender1');
  }

  private get passwordInput() {
    return this.page.locator('#password');
  }

  private get daysSelect() {
    return this.page.locator('#days');
  }

  private get monthsSelect() {
    return this.page.locator('#months');
  }

  private get yearsSelect() {
    return this.page.locator('#years');
  }

  private get newsletterCheckbox() {
    return this.page.locator('#newsletter');
  }

  private get offersCheckbox() {
    return this.page.locator('#optin');
  }

  private get firstNameInput() {
    return this.page.locator('#first_name');
  }

  private get lastNameInput() {
    return this.page.locator('#last_name');
  }

  private get companyInput() {
    return this.page.locator('#company');
  }

  private get address1Input() {
    return this.page.locator('#address1');
  }

  private get address2Input() {
    return this.page.locator('#address2');
  }

  private get countrySelect() {
    return this.page.locator('#country');
  }

  private get stateInput() {
    return this.page.locator('#state');
  }

  private get cityInput() {
    return this.page.locator('#city');
  }

  private get zipcodeInput() {
    return this.page.locator('#zipcode');
  }

  private get mobileNumberInput() {
    return this.page.locator('#mobile_number');
  }

  private get createAccountButton() {
    return this.page.locator('button[data-qa="create-account"]');
  }

  private get continueButton() {
    return this.page.locator('button[data-qa="continue-button"]');
  }

  async fillAccountInformation(password: string, day: string, month: string, year: string) {
    await this.titleMr.check();
    await this.passwordInput.fill(password);
    await this.daysSelect.selectOption(day);
    await this.monthsSelect.selectOption(month);
    await this.yearsSelect.selectOption(year);
  }

  async checkNewsletter() {
    await this.newsletterCheckbox.check();
  }

  async checkOffers() {
    await this.offersCheckbox.check();
  }

  async fillAddressInformation(
    firstName: string,
    lastName: string,
    company: string,
    address1: string,
    address2: string,
    country: string,
    state: string,
    city: string,
    zipcode: string,
    mobileNumber: string
  ) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.companyInput.fill(company);
    await this.address1Input.fill(address1);
    await this.address2Input.fill(address2);
    await this.countrySelect.selectOption(country);
    await this.stateInput.fill(state);
    await this.cityInput.fill(city);
    await this.zipcodeInput.fill(zipcode);
    await this.mobileNumberInput.fill(mobileNumber);
  }

  async clickCreateAccount() {
    await this.createAccountButton.click();
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async verifyAccountCreated() {
    await expect(this.page.locator('b')).toHaveText('Account Created!');
  }
}
