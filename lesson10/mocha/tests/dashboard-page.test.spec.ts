import { expect } from 'chai';
import { DashboardPage } from '../src/pages/dashboard-page';

describe('DashboardPage Class', function () {
    it('should return correct dashboard text', function () {
        const dashboard = new DashboardPage();
        expect(dashboard.getDashboardText()).to.be.equal('Welcome to you Dashboard');
    });
});
