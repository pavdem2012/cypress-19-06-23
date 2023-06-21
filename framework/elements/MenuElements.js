const MenuElements = {

    getRoot(){
        return cy.get('.menu-list')
    },
    setItemsByName(name){
        this.getRoot().get('a').contains(name).click()
    },
    getActiveItem () {
        return this.getRoot().get('.router-link-exact-active')
    }
}
export default MenuElements;