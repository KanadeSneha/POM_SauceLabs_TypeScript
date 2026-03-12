import { BasePage } from "./BasePage";
import { Page, Locator } from "@playwright/test";

export class ProductPage extends BasePage {

        private readonly productTitleLocator: Locator;

    constructor(page:Page) {
        super(page);
        this.productTitleLocator = page.locator('[data-test="title"]');
    }   

    get productTitle() {
        return this.productTitleLocator;
    }

       async verifyProductTitle(): Promise<void> {
            await this.shouldHaveText(this.productTitle, 'Products');
        }
}