import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Constants } from '../utils/Constants';
import { ProductPage } from 'pages/ProductPage';

let loginPage: LoginPage;
let productPage: ProductPage;
test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    await loginPage.navigate();
});
test('verify login', async ({ page }) => {
    await loginPage.login(Constants.USERNAME, Constants.PASSWORD);
    await productPage.verifyProductTitle();

})