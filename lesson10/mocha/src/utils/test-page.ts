import { Page } from '../pages/page';

export function testPage(page: Page): void {
    console.log('Testing page...');
    console.log(page.open());
    console.log(page.getTitle());
}
