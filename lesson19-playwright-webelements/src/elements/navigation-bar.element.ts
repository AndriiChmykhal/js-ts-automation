import { Locator, Page } from '@playwright/test';

export class NavigationBarElement {
    public constructor(
        private readonly root: Locator,
        private readonly page: Page
    ) {}

    private get hamburgerMenu(): Locator {
        return this.root.locator('#nav-hamburger-menu');
    }

    public async openCategory(category: string): Promise<void> {
        await this.hamburgerMenu.click();

        const categoryItem = this.page.locator(`.hmenu-item:has-text("${category}")`).first();

        await Promise.all([
            categoryItem.click(),
            this.page.waitForURL(/bestsellers/, { waitUntil: 'domcontentloaded' })
        ]);
    }
}
