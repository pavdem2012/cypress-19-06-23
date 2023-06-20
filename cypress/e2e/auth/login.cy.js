describe('Авторизация',() => {
    beforeEach(() => {
        cy.visit('https://try.vikunja.io/login')
        cy.contains('Войти')
    })

    it('Нельзя авторизоваться без пароля', () => {
        cy.get('#username').type('demo')
        cy.get('button').contains('Войти').click()
        cy.get('.help').contains('Введите пароль')
        cy.url().should('eq', 'https://try.vikunja.io/login')

    })

    it('Нельзя авторизоваться без имени пользователя', () => {
        cy.get('#password').type('demo')
        cy.get('button').contains('Войти').click()
        cy.get('.help').contains('Введите имя пользователя')
        cy.url().should('eq', 'https://try.vikunja.io/login')

    })

    it('Успешная авторизация', () => {
        cy.get('#username').type('demo')
        cy.get('#password').type('demo')
        cy.get('button').contains('Войти').click({force: true})
        cy.url().should('eq', 'https://try.vikunja.io/')

    })
})
describe('Меню',() => {
    beforeEach(() => {
        cy.visit('https://try.vikunja.io/login')
        cy.contains('Войти')
    })
    it('Переход к странице настроек и выбор локали',()=>{
        cy.get('#username').type('demo')
        cy.get('#password').type('demo')
        cy.get('.button').click()
        cy.url().should('eq', 'https://try.vikunja.io/')
        cy.get('.username').click({force:true})
        cy.get('[href="/user/settings"] > span').click()
        cy.url().should('eq', 'https://try.vikunja.io/user/settings/general')
        cy.get('div:nth-child(9) > label > div > select').select('ru-RU')
        cy.get('[data-cy="saveGeneralSettings"]').click()
        cy.get('.card-header-title').should('contain', "Основные настройки")
    })

    it('Вывод модального окна "Сочетания клавиш"',()=>{
        cy.get('#username').type('demo')
        cy.get('#password').type('demo')
        cy.get('.button').click()
        cy.url().should('eq', 'https://try.vikunja.io/')
        cy.get('.username').click({force:true})
        cy.get('.dropdown-content > :nth-child(2) > span').click()
        cy.url().should('eq', 'https://try.vikunja.io/')
        cy.get('.card-header-title').should('contain',"Сочетания клавиш")
        cy.get('.card-content > .content > :nth-child(1)').should('contain',"Основное")
        cy.get('.card-content > .content > :nth-child(3)').should('contain',"Навигация")
        cy.get('.content > :nth-child(5)').should('contain',"Канбан")
        cy.get('.content > :nth-child(8)').should('contain',"Просмотр проекта")
        cy.get('.content > :nth-child(11)').should('contain',"Страница задачи")
        cy.get('body').type('{esc}');
        cy.url().should('eq', 'https://try.vikunja.io/')
    })

    it('Вывод модального окна "О Vikunja"',()=>{
        cy.get('#username').type('demo')
        cy.get('#password').type('demo')
        cy.get('.button').click()
        cy.url().should('eq', 'https://try.vikunja.io/')
        cy.get('.username').click({force:true})
        cy.get('[href="/about"] > span').click({force:true})
        cy.url().should('eq', 'https://try.vikunja.io/about')
        cy.get('.card-header-title').should('contain',"О Vikunja")
        cy.get('.p-4')
            .should('contain', 'Версия фронтенда:')
            .should('contain', 'Версия API:');
        cy.get('footer.card-footer button.base-button').contains('Закрыть').click();
        cy.url().should('eq', 'https://try.vikunja.io/')
    })

    it('Успешный разлогин',()=>{
        cy.get('#username').type('demo')
        cy.get('#password').type('demo')
        cy.get('.button').click()
        cy.url().should('eq', 'https://try.vikunja.io/')
        cy.get('.username').click({force:true})
        cy.get(':nth-child(4) > span').click({force:true})
        cy.url().should('eq', 'https://try.vikunja.io/login')
    })

})