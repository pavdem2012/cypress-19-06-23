import config from "../config/config";

const LoginPage = {
    visit (){
        cy.visit(config.urls.loginPage)
        cy.contains('Войти')
    },

    fillUsername(username){
        cy.get(Elements.userNameField).type(username)
    },

    fillPassword(password){
        cy.get(Elements.userPassField).type(password)
    },

    submitForm() {
        cy.get('button').contains('Войти').click()
    },

    getPasswordError (){
        return cy.get(Elements.errorText)
    },

    login ({username, password}) {
        this.fillUsername(username)
        this.fillPassword(password)
        this.submitForm()
    },
}
const Elements = {
    userNameField: '#username',
    userPassField: '#password',
    errorText: '.help'
}
export default LoginPage