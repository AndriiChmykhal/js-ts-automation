import { Locator } from '@playwright/test';

export class SearchElement {
    public constructor(private readonly root: Locator) {}

    public get input(): Locator {
        return this.root.locator('#twotabsearchtextbox');
    }

    public get button(): Locator {
        return this.root.locator('#nav-search-submit-button');
    }

    public async searchFor(query: string): Promise<void> {
        await this.input.fill(query);
        await this.button.click();
    }
}
