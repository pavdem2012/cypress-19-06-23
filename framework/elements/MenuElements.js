const MenuElements = {
    getRoot(){
        return cy.get('.menu-list')
    },
    getItemsByName(name){
        this.getRoot().get('a').contains(name)
    },
    getActiveItem () {
        return this.getRoot().get('.router-link-exact-active')
    }
}
export default MenuElements;