import { expect } from 'chai';
import { DashboardPage } from '../src/pages/dashboard-page';

describe('DashboardPage Class', function () {
    it('should return correct dashboard text', function () {
        // Arrange
        const dashboard = new DashboardPage();

        // Act & Assert
        expect(dashboard.getDashboardText()).to.be.equal('Welcome to your Dashboard');
    });

    it('should return correct title', function () {
        // Arrange
        const dashboard = new DashboardPage();

        // Act & Assert
        expect(dashboard.getTitle()).to.be.equal('Welcome to your Dashboard');
    });
});
