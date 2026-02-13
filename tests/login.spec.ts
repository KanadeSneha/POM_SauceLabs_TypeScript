import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Constants } from '../utils/Constants';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
});
test('verify login', async ({ page }) => {
    await loginPage.login(Constants.USERNAME, Constants.PASSWORD);



})