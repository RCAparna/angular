export class REST_API {
    server_URL: string = 'https://app-fullstack-aparna.herokuapp.com/';
    authAPIs = {
        register: this.server_URL + 'auth/register',
        login: this.server_URL + 'auth/login'
    }
    dashboard = {
        createDashboard: this.server_URL + 'dashboard/createYourDashboard',
        retreiveUserDashBoardDetails: this.server_URL + 'dashboard/retreiveUserDashBoardDetails'
    }
};
