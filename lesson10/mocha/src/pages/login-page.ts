import { Page } from './page';

export class LoginPage extends Page {
    public constructor() {
        super('/login', 'Login');
    }

    public login(email: string, password: string): string {
        return `Logging with email ${email} and password ${password}`;
    }
}

