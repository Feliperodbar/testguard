import { test, expect } from '../fixtures/testFixtures';
import testData from '../data/testData.json';
import { generateUniqueEmail } from '../utils/helpers';

test.describe('Signup Tests', () => {
  test('should register user successfully', async ({ homePage, loginSignupPage, signupPage, accountDeletedPage }) => {
    const uniqueEmail = generateUniqueEmail(testData.newUser.email);
    
    await homePage.navigate();
    await homePage.goToSignupLogin();
    
    await loginSignupPage.fillSignupForm(testData.newUser.name, uniqueEmail);
    await loginSignupPage.clickSignup();
    
    await signupPage.fillAccountInformation(
      testData.newUser.password,
      testData.newUser.day,
      testData.newUser.month,
      testData.newUser.year
    );
    await signupPage.checkNewsletter();
    await signupPage.checkOffers();
    await signupPage.fillAddressInformation(
      testData.newUser.firstName,
      testData.newUser.lastName,
      testData.newUser.company,
      testData.newUser.address1,
      testData.newUser.address2,
      testData.newUser.country,
      testData.newUser.state,
      testData.newUser.city,
      testData.newUser.zipcode,
      testData.newUser.mobileNumber
    );
    await signupPage.clickCreateAccount();
    
    await signupPage.verifyAccountCreated();
    await signupPage.clickContinue();
    
    await homePage.verifyLoggedInAs(testData.newUser.name);
    
    await homePage.deleteAccount();
    await accountDeletedPage.verifyAccountDeleted();
  });
});
