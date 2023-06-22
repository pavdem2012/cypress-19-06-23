import config from "../../../framework/config/config.js";
import MainMenuElements from "../../../framework/elements/MainMenuElements.js";
import UserMenuElement from "../../../framework/elements/UserMenuElement";
import settingsModalElements from "../../../framework/config/settingsModalElements";
import mainMenuActions from "../../../framework/actions/mainMenuActions";
 describe ('Сквозные меню',() =>{
     describe('Меню пользователя',()=>{
        beforeEach(() =>{
            mainMenuActions.getLoginSession()
        })

        it('Переход к странице настроек и выбор локали',()=>{
            cy.url().should('eq', config.urls.mainPage)
            UserMenuElement.clickItemByIndex(0)
            cy.url().should('eq', config.urls.settingsPage)
            UserMenuElement.setSettings('ru-RU')
            cy.get(settingsModalElements.elements.header).should('contain', config.userMenuTitles.item1)
        })
        it('Вывод модального окна "Сочетания клавиш"',()=>{

            cy.url().should('eq', config.urls.mainPage)
            UserMenuElement.clickItemByIndex(1)
            cy.url().should('eq', config.urls.mainPage)
            cy.get(settingsModalElements.elements.header).should('contain',config.userMenuTitles.item2)
            cy.get(settingsModalElements.elements.block1Select)
                .should('contain',config.userMenuTitles.subItems2.subItem1)
            cy.get(settingsModalElements.elements.block2Select)
                .should('contain',config.userMenuTitles.subItems2.subItem2)
            cy.get(settingsModalElements.elements.block3Select)
                .should('contain',config.userMenuTitles.subItems2.subItem3)
            cy.get(settingsModalElements.elements.block4Select)
                .should('contain',config.userMenuTitles.subItems2.subItem4)
            cy.get(settingsModalElements.elements.block5Select)
                .should('contain',config.userMenuTitles.subItems2.subItem5)
            UserMenuElement.closeSettings()
            cy.url().should('eq', config.urls.mainPage)
        })

        it('Вывод модального окна "О Vikunja"',()=>{

            cy.url().should('eq', config.urls.mainPage)
            UserMenuElement.clickItemByIndex(2)
            cy.url().should('eq', config.urls.aboutPage)
            cy.get(settingsModalElements.elements.header).should('contain',config.userMenuTitles.item3)
            cy.get(settingsModalElements.elements.header4)
                .should('contain', config.userMenuTitles.subItems3.subItem1)
                .should('contain', config.userMenuTitles.subItems3.subItem2);
            UserMenuElement.closeAbout()
            cy.url().should('eq', config.urls.mainPage)
        })

        it('Успешный разлогин',()=>{
            cy.url().should('eq', config.urls.mainPage)
            UserMenuElement.clickItemByIndex(3)
            cy.url().should('eq', config.urls.loginPage)
        })
     })
    describe('Главное меню',()=>{
        beforeEach(() =>{
            mainMenuActions.getLoginSession()
        })
        it('Проверка активного элемента главного меню',() =>{
            MainMenuElements.getActiveItem().contains(config.mainMenuItems.item1)
        })
        it('Проверка переходов по главному меню',()=>{
            MainMenuElements.setItemByName(config.mainMenuItems.item1)
            cy.title().should('eq',config.titlesPages.title1)
            cy.url().should('eq', config.urls.mainPage)
            MainMenuElements.getActiveItem().contains(config.mainMenuItems.item1)
            MainMenuElements.setItemByName(config.mainMenuItems.item2)
            cy.title().should('contain','Задачи с')
                .should('contain','по')
                .should('contain','| Vikunja')
            cy.url().should('eq', config.urls.upcomingPage)
            MainMenuElements.getActiveItem().contains(config.mainMenuItems.item2)
            MainMenuElements.setItemByName(config.mainMenuItems.item3)
            cy.title().should('eq',config.titlesPages.title3)
            cy.url().should('eq', config.urls.projectsPage)
            MainMenuElements.getActiveItem().contains(config.mainMenuItems.item3)
            MainMenuElements.setItemByName(config.mainMenuItems.item4)
            cy.title().should('eq',config.titlesPages.title4)
            cy.url().should('eq', config.urls.labelsPage)
            MainMenuElements.getActiveItem().contains(config.mainMenuItems.item4)
            MainMenuElements.setItemByName(config.mainMenuItems.item5)
            cy.title().should('eq',config.titlesPages.title5)
            cy.url().should('eq', config.urls.teamsPage)
            MainMenuElements.getActiveItem().contains(config.mainMenuItems.item5)
        })
    })
})
