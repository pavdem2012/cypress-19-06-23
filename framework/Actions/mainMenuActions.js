import LoginPage from "../pages/LoginPage";
import config from "../config/config";

const mainMenuActions = {
    getLoginSession(){
        LoginPage.visit();
        LoginPage.login(config.credentials.user)
    }
}
export default mainMenuActions