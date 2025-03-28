import { Page, Response, Locator } from '@playwright/test';

export class AmazonHomePage {
    private home_page_url = 'https://www.amazon.co.uk/';
    private searchInput: Locator;
    private searchButton: Locator;
    private results: Locator;
    private acceptCookiesButton: Locator;

    public constructor(private page: Page) {
        this.searchInput = page.locator('#twotabsearchtextbox');
        this.searchButton = page.locator('#nav-search-submit-button');
        this.results = page.locator('div.s-main-slot');
        this.acceptCookiesButton = page.locator('#sp-cc-accept');
    }

    public async navigate(): Promise<Response | null> {
        const response = await this.page.goto(this.home_page_url);
        await this.acceptCookiesIfPresent();
        return response;
    }

    private async acceptCookiesIfPresent(): Promise<void> {
        try {
            await this.acceptCookiesButton.click({ timeout: 5000 });
        } catch {
        // Cookie banner not present, continue
        }
    }

    public async searchFor(search_item: string): Promise<void> {
        await this.searchInput.fill(search_item);
        await this.searchButton.click();
    }

    public get searchInputElement(): Locator {
        return this.searchInput;
    }

    public get resultsElement(): Locator {
        return this.results;
    }
}

