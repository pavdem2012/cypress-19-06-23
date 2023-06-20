
const LoginPage = {
    visit (){
        cy.visit('https://try.vikunja.io/login')
        cy.contains('Войти')
    },
    fillUsername(username){
        cy.get('#username').type(username)
    },
    fillPassword(password){
        cy.get('#password').type(password)
    },
    submitForm() {
        cy.get('button').contains('Войти').click()
    },
    getPasswordError (){
        return cy.get('.help')
    },
    login ({username, password}) {
        this.fillUsername(username)
        this.fillPassword(password)
        this.submitForm()
    },
    getLoginUrl () {
        return 'https://try.vikunja.io/login'
    },
    getMainUrl () {
        return 'https://try.vikunja.io/'
    }
}
export default LoginPage