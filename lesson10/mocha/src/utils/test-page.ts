import { Page } from '../pages/page';

export function testPage(page: Page): { message: string; title: string } {
    return {
        message: 'Testing page...',
        title: page.getTitle()
    };
}
