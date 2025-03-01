import { LoginPage } from '../src/pages/login-page';
import { expect } from 'chai';

describe('LoginPage Class', function () {
    it('should log login message', function () {
        const loginPage = new LoginPage();
        expect(loginPage.login('test@mail.com', 'password123')).to.be.equal('Logging with email test@mail.com and password password123');
    });
});
