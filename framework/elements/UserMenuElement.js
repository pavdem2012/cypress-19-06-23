const UserMenuElement ={
    getRoot(){
        return cy.get('.dropdown-content')
    },
    clickItemByIndex(index){
        this.getUserMenu()
        this.getRoot().should('be.visible').find('span').eq(index).click()
    },
    getUserMenu(){
        cy.get('.username').click({force:true})
    },
    closeSettings(){
        cy.get('body').type('{esc}')
    },

    closeAbout(){
        cy.get('footer.card-footer button.base-button').contains('Закрыть').click();
    },
    setSettings(value){
        cy.get('div:nth-child(9) > label > div > select').select(value)
        cy.get('[data-cy="saveGeneralSettings"]').click()
    }
}
export default UserMenuElement