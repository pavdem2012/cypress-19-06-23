import config from "../../../framework/config/config.js";
import MainMenuElements from "../../../framework/elements/MainMenuElements.js";
import UserMenuElement from "../../../framework/elements/UserMenuElement";
import LoginPage from "../../../framework/pages/LoginPage";

//UserMenuElement.Elements = Elements;
describe ('Сквозные меню',() =>{
     describe('Меню пользователя',()=>{
        beforeEach(() =>{
            LoginPage.getLoginSession()
        })

        it('Переход к странице настроек и выбор локали',()=>{
            cy.url().should('eq', config.urls.mainPage)
            UserMenuElement.clickItemByIndex(0)
            cy.url().should('eq', config.urls.settingsPage)
            UserMenuElement.setSettings('ru-RU')
            cy.get(UserMenuElement.Elements.modalWinTitle).should('contain', config.userMenuTitles.basicSettingsItem)
        })
        it('Вывод модального окна "Сочетания клавиш"',()=>{

            cy.url().should('eq', config.urls.mainPage)
            UserMenuElement.clickItemByText('Сочетания клавиш')
            cy.url().should('eq', config.urls.mainPage)
            cy.get(UserMenuElement.Elements.modalWinTitle)
                .should('contain',config.userMenuTitles.keyboardShortcutsItem.keyboardShortcutsItem)
            cy.get(UserMenuElement.Elements.headerH3).each(($element, index) => {
                cy.wrap($element)
                    .invoke('text')
                    .then((text) => {
                        const expectedText = MainMenuElements.getExpectedHeaderText(index); // Функция, которая возвращает ожидаемый текст в зависимости от индекса элемента
                        expect(text).to.contain(expectedText);
                    });
            });
            UserMenuElement.closeSettings()
            cy.url().should('eq', config.urls.mainPage)
        })

        it('Вывод модального окна "О Vikunja"',()=>{

            cy.url().should('eq', config.urls.mainPage)
            UserMenuElement.clickItemByText('О Vikunja')
            cy.url().should('eq', config.urls.aboutPage)
            cy.get(UserMenuElement.Elements.modalWinTitle)
                .should('contain',config.userMenuTitles.aboutItem.aboutItem)
            cy.get(UserMenuElement.Elements.headerH4)
                .should('contain', config.userMenuTitles.aboutItem.subTitles.frontendVersionTitle)
                .should('contain', config.userMenuTitles.aboutItem.subTitles.apiVersionTitle);
            UserMenuElement.closeAbout()
            cy.url().should('eq', config.urls.mainPage)
        })

        it('Успешный разлогин',()=>{
            cy.url().should('eq', config.urls.mainPage)
            UserMenuElement.clickItemByText('Выйти')
            cy.url().should('eq', config.urls.loginPage)
        })
     })
    describe('Главное меню',()=>{
        beforeEach(() =>{
            LoginPage.getLoginSession()
        })
        it('Проверка активного элемента главного меню',() =>{
            MainMenuElements.getActiveItem().contains(config.mainMenuItems.reviewItem)
        })
        it('Проверка переходов по главному меню',()=>{
            MainMenuElements.setItemByName(config.mainMenuItems.reviewItem)
            cy.title().should('eq',config.titlesPages.mainPageTitle)
            cy.url().should('eq', config.urls.mainPage)
            MainMenuElements.getActiveItem().contains(config.mainMenuItems.reviewItem)
            MainMenuElements.setItemByName(config.mainMenuItems.upcomingChallengesItem)
            cy.title().should('contain',config.titlesPages.upcomingChallengesTitle.subStr1)
                .should('contain',config.titlesPages.upcomingChallengesTitle.subStr2)
                .should('contain',config.titlesPages.upcomingChallengesTitle.subStr3)
            cy.url().should('eq', config.urls.upcomingChallengesPage)
            MainMenuElements.getActiveItem().contains(config.mainMenuItems.upcomingChallengesItem)
            MainMenuElements.setItemByName(config.mainMenuItems.projectsItem)
            cy.title().should('eq',config.titlesPages.projectsPageTitle)
            cy.url().should('eq', config.urls.projectsPage)
            MainMenuElements.getActiveItem().contains(config.mainMenuItems.projectsItem)
            MainMenuElements.setItemByName(config.mainMenuItems.labelsItem)
            cy.title().should('eq',config.titlesPages.labelsPageTitle)
            cy.url().should('eq', config.urls.labelsPage)
            MainMenuElements.getActiveItem().contains(config.mainMenuItems.labelsItem)
            MainMenuElements.setItemByName(config.mainMenuItems.teamsItem)
            cy.title().should('eq',config.titlesPages.teamsPageTitle)
            cy.url().should('eq', config.urls.teamsPage)
            MainMenuElements.getActiveItem().contains(config.mainMenuItems.teamsItem)
        })
    })
})
