import { expect } from 'chai';
import sinon from 'sinon';
import { DashboardPage } from '../src/pages/dashboard-page';
import { LoginPage } from '../src/pages/login-page';

describe('Mocking functions and objects with Sinon.js', function () {
    let dashboardPage: DashboardPage;
    let loginPage: LoginPage;

    beforeEach(() => {
        dashboardPage = new DashboardPage();
        loginPage = new LoginPage();
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should mock getDashboardText method', function () {
        const mock = sinon.stub(dashboardPage, 'getDashboardText').returns('Mocked Dashboard Text');
        expect(dashboardPage.getDashboardText()).to.equal('Mocked Dashboard Text');
        sinon.assert.calledOnce(mock);
    });

    it('should mock getTitle method of LoginPage', function () {
        const mock = sinon.stub(loginPage, 'getTitle').returns('Mocked Title');
        expect(loginPage.getTitle()).to.equal('Mocked Title');
        sinon.assert.calledOnce(mock);
    });

    it('should mock login method', function () {
        const mock = sinon.stub(loginPage, 'login').returns('Mocked Login Response');
        expect(loginPage.login('test@mail.com', 'password123')).to.equal('Mocked Login Response');
        sinon.assert.calledOnce(mock);
    });

    it('should spy on getDashboardText method', function () {
        const spy = sinon.spy(dashboardPage, 'getDashboardText');
        dashboardPage.getDashboardText();
        sinon.assert.calledOnce(spy);
    });

    it('should stub multiple methods of LoginPage', function () {
        const stub = sinon.stub(loginPage);
        stub.getTitle.returns('Mocked Login Title');
        stub.login.returns('Mocked Login Message');
        expect(loginPage.getTitle()).to.equal('Mocked Login Title');
        expect(loginPage.login('user@mail.com', 'pass')).to.equal('Mocked Login Message');
    });
});
