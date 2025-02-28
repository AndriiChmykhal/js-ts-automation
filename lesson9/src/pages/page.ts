import { IPage } from '../interfaces/ipage';

export abstract class Page implements IPage {
    protected url: string;
    protected title: string;

    public constructor(url: string, title: string) {
        this.url = url;
        this.title = title;
    }

    public open(): void {
        console.log(`Opening $(this.url}`);
    }

    public getTitle(): string {
        return (`Title is ${this.title}`);
    }
}
