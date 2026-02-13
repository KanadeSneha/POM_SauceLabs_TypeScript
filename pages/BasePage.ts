import { Page, expect, Locator } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async navigateTo(url: string):Promise<void> {
        await this.page.goto(url);
    }

    //waits

    async waitForVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }
    async waitForClickable(locator: Locator) {
        await expect(locator).toBeEnabled();
    }
    async waitForHidden(locator: Locator) {
        await expect(locator).toBeHidden();
    }

    //actions
    async FillInput(locator: Locator, value: string) {
        await this.waitForVisible(locator);
        await locator.fill(value);
        console.log('filled input with value: ' + value);

    }

    async clickElement(locator: Locator) {
        await this.waitForClickable(locator); 
        await locator.click(); 
        console.log('clicked on element: ' + locator); 
    }


    //Assertions

    async shouldHaveText(locator: Locator, expectedText: string) {
        await this.waitForVisible(locator); 
        await expect(locator).toHaveText(expectedText); 
        console.log('asserted that element has text: ' + expectedText); 
    }

}
