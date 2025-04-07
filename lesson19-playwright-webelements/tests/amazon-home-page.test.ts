import { test, expect } from '@playwright/test';
import { AmazonHomePage } from '../src/pages/amazon-home-page';

test.describe('Amazon homepage tests', () => {
    let amazon: AmazonHomePage;

    test.beforeEach(async ({ page }) => {
        amazon = new AmazonHomePage(page);
        await amazon.navigate();
    });

    test('Search input is visible', async () => {
        await expect(amazon.search.input).toBeVisible();
    });

    test('Searching shows results', async () => {
        await amazon.searchFor('laptop');
        await expect(amazon.results).toBeVisible();
    });

    test('User can open a category from navigation bar', async () => {
        await amazon.navigation.openCategory('Best Sellers');
        await expect(amazon.page.locator('span:has-text("Amazon Best Sellers")')).toBeVisible();
        await expect(amazon.page).toHaveURL(/bestsellers/);
    });
});
