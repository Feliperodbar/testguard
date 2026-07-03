import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginSignupPage } from '../pages/LoginSignupPage';
import { SignupPage } from '../pages/SignupPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { AccountDeletedPage } from '../pages/AccountDeletedPage';

type TestFixtures = {
  homePage: HomePage;
  loginSignupPage: LoginSignupPage;
  signupPage: SignupPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  accountDeletedPage: AccountDeletedPage;
};

export const test = base.extend<TestFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginSignupPage: async ({ page }, use) => {
    await use(new LoginSignupPage(page));
  },
  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  accountDeletedPage: async ({ page }, use) => {
    await use(new AccountDeletedPage(page));
  },
});

export { expect } from '@playwright/test';
