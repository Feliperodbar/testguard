import { test, expect } from '../fixtures/testFixtures';
import testData from '../data/testData.json';

test.describe('Login Tests', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
  });

  test('should_login_successfully_with_valid_credentials', async ({ loginPage, inventoryPage }) => {
    await loginPage.login(testData.users.standard.username, testData.users.standard.password);
    await inventoryPage.verifyInventoryPageIsVisible();
  });

  test('should_show_error_message_for_locked_out_user', async ({ loginPage }) => {
    await loginPage.login(testData.users.locked.username, testData.users.locked.password);
    await loginPage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.');
  });

  test('should_show_error_message_for_invalid_credentials', async ({ loginPage }) => {
    await loginPage.login(testData.users.invalid.username, testData.users.invalid.password);
    await loginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
  });

  test('should_show_error_message_when_username_is_empty', async ({ loginPage }) => {
    await loginPage.login('', testData.users.standard.password);
    await loginPage.verifyErrorMessage('Epic sadface: Username is required');
  });

  test('should_show_error_message_when_password_is_empty', async ({ loginPage }) => {
    await loginPage.login(testData.users.standard.username, '');
    await loginPage.verifyErrorMessage('Epic sadface: Password is required');
  });
});
