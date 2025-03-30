import { Page, Locator } from '@playwright/test';

export class AmazonHomePage {
    private readonly homePageUrl = 'https://www.amazon.co.uk/';
    private readonly page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    public get searchInput(): Locator {
        return this.page.locator('#twotabsearchtextbox');
    }

    public get searchButton(): Locator {
        return this.page.locator('#nav-search-submit-button');
    }

    public get resultsElement(): Locator {
        return this.page.locator('div.s-main-slot');
    }

    public get acceptCookiesButton(): Locator {
        return this.page.locator('#sp-cc-accept');
    }

    public async navigate(): Promise<void> {
        await this.page.goto(this.homePageUrl);
        await this.acceptCookiesIfPresent();
        await this.searchInput.waitFor({ state: 'visible', timeout: 5000 });
    }

    private async acceptCookiesIfPresent(): Promise<void> {
        if (await this.acceptCookiesButton.isVisible()) {
            await this.acceptCookiesButton.click();
        }
    }

    public async searchFor(search_item: string): Promise<void> {
        await this.searchInput.fill(search_item);
        await this.searchButton.click();
    }
}

