import { testPage } from '../src/utils/test-page';
import { strict as assert } from 'assert';
import { DashboardPage } from '../src/pages/dashboard-page';
import { LoginPage } from '../src/pages/login-page';

describe('testPage function', () => {
    it('should return open message and title for DashboardPage', () => {
        // Arrange
        const dashboardPage = new DashboardPage();

        // Act
        const result = testPage(dashboardPage);

        // Assert
        assert.deepEqual(result, {
            message: 'Testing page...',
            title: dashboardPage.getTitle()
        });
    });

    it('should return open message and title for LoginPage', () => {
        // Arrange
        const loginPage = new LoginPage();

        // Act
        const result = testPage(loginPage);

        // Assert
        assert.deepEqual(result, {
            message: 'Testing page...',
            title: loginPage.getTitle()
        });
    });
});

describe('Page class', () => {
    it('should store and return the correct title', () => {
        // Arrange
        const page = new DashboardPage();

        // Act & Assert
        assert.equal(page.getTitle(), 'Welcome to your Dashboard');
    });

    it('should return the correct open message', () => {
        // Arrange
        const page = new DashboardPage();

        // Act & Assert
        assert.equal(page.open(), 'Opening /dashboard');
    });
});
