const Elements={
    userNameMenu: '.username',
    dropDownContent:'.dropdown-content',
    modalWinBody:'body',
    closeBtn: 'footer.card-footer button.base-button',
    langDropMenu: 'div:nth-child(9) > label > div > select',
    submitSettingsBtn: '[data-cy="saveGeneralSettings"]',
    modalWinTitle:'.card-header-title',
    headerH3:'div.content > h3[data-v-e103502e=""]',
    headerH4: '.p-4'
}
const UserMenuElement ={
    Elements: Elements,

    getRoot(){
        return cy.get(Elements.dropDownContent)
    },
    clickItemByIndex(index){
        this.getUserMenu()
        this.getRoot().should('be.visible').find('span').eq(index).click()
    },
    clickItemByText(text){
        this.getUserMenu()
        this.getRoot().should('be.visible').find('span').contains(text).click()
    },
    getUserMenu(){
        cy.get(Elements.userNameMenu).click({force:true})
    },
    closeSettings(){
        cy.get(Elements.modalWinBody).type('{esc}')
    },

    closeAbout(){
        cy.get(Elements.closeBtn).contains('Закрыть').click();
    },
    setSettings(value){
        cy.get(Elements.langDropMenu).select(value)
        cy.get(Elements.submitSettingsBtn).click()
    }
}
export default UserMenuElement


