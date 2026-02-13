import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { Constants } from '../utils/Constants';

export class LoginPage extends BasePage {

    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async navigate(): Promise<void> {
        await this.navigateTo(Constants.LOGIN_URL);
        
    }

    async login(username: string, password: string): Promise<void> {
        await this.FillInput(this.usernameInput, username);
        await this.FillInput(this.passwordInput, password);
        await this.clickElement(this.loginButton);
    }

}


