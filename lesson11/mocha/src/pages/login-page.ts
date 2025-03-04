import { Page } from './page';

export class LoginPage extends Page {
    public constructor() {
        super('/login', 'Title is Login');
    }

    public login(email: string, password: string): string {
        return `Logging in with email: ${email} and password: ${password}`;
    }
}

