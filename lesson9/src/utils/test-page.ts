import { IPage } from '../interfaces/ipage';


export function testPage(page: IPage): void {
    console.log('Testing page...');
    page.open();
    console.log(page.getTitle());
}
