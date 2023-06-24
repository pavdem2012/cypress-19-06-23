/// <reference types="cypress"/>

import config from "../../../framework/config/config.js";
import LoginPage from "../../../framework/pages/LoginPage.js";

describe('Авторизация',() => {
    beforeEach(() => {
        LoginPage.visit();
    })

    it('Нельзя авторизоваться без пароля', () => {
        LoginPage.fillUsername(config.credentials.user.username)
        LoginPage.submitForm()
        LoginPage.getPasswordError().contains(config.loginPageErrors.passwordErr)
        cy.url().should('eq', config.urls.loginPage)
    })

    it('Нельзя авторизоваться без имени пользователя', () => {
        LoginPage.fillPassword(config.credentials.user.password)
        LoginPage.submitForm()
        LoginPage.getPasswordError().contains(config.loginPageErrors.usernameErr)
        cy.url().should('eq', config.urls.loginPage)
    })

    it('Успешная авторизация', () => {
        LoginPage.login(config.credentials.user)
        cy.url().should('eq', config.urls.mainPage)
    })
})
