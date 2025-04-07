import { Page, Locator } from '@playwright/test';
import { SearchElement } from '../elements/search.element';
import { NavigationBarElement } from '../elements/navigation-bar.element';

export class AmazonHomePage {
    private readonly url: string = 'https://www.amazon.co.uk/';
    public readonly search: SearchElement;
    public readonly navigation: NavigationBarElement;
    public readonly results: Locator;
    public readonly acceptCookiesButton: Locator;

    public constructor(public readonly page: Page) {
        this.search = new SearchElement(page.locator('#nav-search'));
        this.navigation = new NavigationBarElement(page.locator('#navbar'), page);
        this.results = page.locator('div.s-main-slot');
        this.acceptCookiesButton = page.locator('#sp-cc-accept');
    }

    public async navigate(): Promise<void> {
        await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
        await this.acceptCookiesIfVisible();
        await this.search.input.waitFor({ state: 'visible' });
    }

    private async acceptCookiesIfVisible(): Promise<void> {
        if (await this.acceptCookiesButton.isVisible()) {
            await this.acceptCookiesButton.click();
        }
    }

    public async searchFor(term: string): Promise<void> {
        await this.search.searchFor(term);
    }
}
