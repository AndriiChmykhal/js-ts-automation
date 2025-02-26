import { Page } from './page';

export class LoginPage extends Page {
    public constructor() {
        super('/login', 'Login');
    }

    public login(email: string, password: string): void {
        console.log(`Logging with email ${email} and password ${password}`);
    }
}
