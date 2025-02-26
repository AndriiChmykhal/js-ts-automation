import { Page } from './page';

export class DashboardPage extends Page {
    public constructor() {
        super('/dashboard', 'Dashboard');
    }

    public getDashboardText(): string {
        return 'Welcome to you Dashboard';
    }
}
