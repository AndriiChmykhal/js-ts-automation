import { LoginPage } from '../src/pages/login-page';
import { expect } from 'chai';

describe('LoginPage Class', function () {
    it('should log login message', function () {
        // Arrange
        const loginPage = new LoginPage();

        // Act & Assert
        expect(loginPage.login('test@mail.com', 'password123')).to.be.equal(
            'Logging in with email: test@mail.com and password: password123'
        );
    });

    it('should return correct title', function () {
        // Arrange
        const loginPage = new LoginPage();

        // Act & Assert
        expect(loginPage.getTitle()).to.be.equal('Title is Login');
    });
});
