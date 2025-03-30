import { test, expect } from '@playwright/test';
import { AmazonHomePage } from '../src/pages/amazon-home-page';


test.describe('Amazon homepage', () => {
    let amazon: AmazonHomePage;

    test.beforeEach(async ({ page }) => {
        amazon = new AmazonHomePage(page);
        await amazon.navigate();
    });

    test('load homepage and show search input', async () => {
        await expect(amazon.searchInput).toBeVisible();
    });

    test('return results when searching for an item', async () => {
        await amazon.searchFor('iPhone');
        await expect(amazon.resultsElement).toBeVisible();
    });

    test('return results containing the keyword', async () => {
        await amazon.searchFor('book');
        const resultTitles = amazon.resultsElement.locator('[data-asin]').first();
        await expect(resultTitles.first()).toContainText(/book/i);
    });
});
