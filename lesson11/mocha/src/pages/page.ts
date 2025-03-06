export abstract class Page {
    protected url: string;
    protected title: string;

    public constructor(url: string, title: string) {
        this.url = url;
        this.title = title;
    }

    public open(): string {
        return `Opening ${this.url}`;
    }

    public getTitle(): string {
        return this.title;
    }
}
