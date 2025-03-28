import { test, expect } from '@playwright/test';
import { AmazonHomePage } from '../src/pages/amazon-home-page';


test.describe('Amazon homepage', () => {
    test('load homepage and show search input', async ({ page }) => {
        const amazon = new AmazonHomePage(page);
        await amazon.navigate();
        await expect(amazon.searchInputElement).toBeVisible();
    });

    test('return results when searching for an item', async ({ page }) => {
        const amazon = new AmazonHomePage(page);
        await amazon.navigate();
        await amazon.searchFor('iPhone');
        await expect(amazon.resultsElement).toBeVisible();
    });

    test('change URL after search', async ({ page }) => {
        const amazon = new AmazonHomePage(page);
        await amazon.navigate();
        await amazon.searchFor('book');
        await expect(page).toHaveURL(/s?k=book/);
    });
});
