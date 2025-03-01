import { LoginPage } from './pages/login-page';
import { DashboardPage } from './pages/dashboard-page';
import { testPage } from './utils/test-page';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

testPage(loginPage);
loginPage.login('test@email.com', 'password_stub');

testPage(dashboardPage);
console.log(dashboardPage.getDashboardText());
