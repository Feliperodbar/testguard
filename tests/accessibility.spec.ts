import { test, expect } from '../fixtures/testFixtures';
import AxeBuilder from '@axe-core/playwright';
import testData from '../data/testData.json';

test.describe('Accessibility Tests', () => {
  test('should_not_have_accessibility_violations_on_login_page', async ({ page, loginPage }) => {
    await loginPage.navigate();
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should_not_have_accessibility_violations_on_inventory_page', async ({ page, loginPage, inventoryPage }) => {
    await loginPage.navigate();
    await loginPage.login(testData.users.standard.username, testData.users.standard.password);
    await inventoryPage.verifyInventoryPageIsVisible();
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
