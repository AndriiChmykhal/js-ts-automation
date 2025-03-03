import { Page } from './page';

export class DashboardPage extends Page {
    public constructor() {
        super('/dashboard', 'Welcome to your Dashboard');
    }

    public getDashboardText(): string {
        return this.title;
    }
}
