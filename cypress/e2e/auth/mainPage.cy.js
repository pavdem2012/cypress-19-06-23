import config from "../../../framework/config/config.js";
import LoginPage from "../../../framework/pages/LoginPage.js";
import MenuElements from "../../../framework/elements/MenuElements.js";
import UserMenuElement from "../../../framework/elements/UserMenuElement";
import settingsPageElements from "../../../framework/config/settingsPageElements";
describe ('Сквозные меню',() =>{
    beforeEach(() =>{
        LoginPage.visit();
        LoginPage.login(config.credentials.user)
    })

    it('Переход к странице настроек и выбор локали',()=>{
        cy.url().should('eq', config.urls.mainPage)
        UserMenuElement.clickItemByIndex(0)
        cy.url().should('eq', config.urls.settingsPage)
        UserMenuElement.setSettings('ru-RU')
        cy.get('.card-header-title').should('contain', "Основные настройки")
    })
    it('Вывод модального окна "Сочетания клавиш"',()=>{

        cy.url().should('eq', config.urls.mainPage)
        UserMenuElement.clickItemByIndex(1)
        cy.url().should('eq', config.urls.mainPage)
        cy.get(settingsPageElements.elements.header).should('contain',"Сочетания клавиш")
        cy.get(settingsPageElements.elements.block1Select).should('contain',"Основное")
        cy.get(settingsPageElements.elements.block2Select).should('contain',"Навигация")
        cy.get(settingsPageElements.elements.block3Select).should('contain',"Канбан")
        cy.get(settingsPageElements.elements.block4Select).should('contain',"Просмотр проекта")
        cy.get(settingsPageElements.elements.block5Select).should('contain',"Страница задачи")
        UserMenuElement.closeSettings()
        cy.url().should('eq', config.urls.mainPage)
    })

    it('Вывод модального окна "О Vikunja"',()=>{

        cy.url().should('eq', config.urls.mainPage)
        UserMenuElement.clickItemByIndex(2)
        cy.url().should('eq', config.urls.aboutPage)
        cy.get(settingsPageElements.elements.header).should('contain',"О Vikunja")
        cy.get(settingsPageElements.elements.header4)
            .should('contain', 'Версия фронтенда:')
            .should('contain', 'Версия API:');
        UserMenuElement.closeAbout()
        cy.url().should('eq', config.urls.mainPage)
    })

    it('Успешный разлогин',()=>{
        cy.url().should('eq', config.urls.mainPage)
        UserMenuElement.clickItemByIndex(3)
        cy.url().should('eq', config.urls.loginPage)
    })

    it('Проверка активного элемента главного меню',() =>{
        MenuElements.getActiveItem().contains('Обзор')
    })
})
