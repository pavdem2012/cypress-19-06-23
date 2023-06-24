const MainMenuElements = {

    getRoot(){
        return cy.get(Elements.menuList)
    },
    setItemByName(name){
        this.getRoot().get('a').contains(name).click()
    },
    getActiveItem () {
        return this.getRoot().get(Elements.activeMenuItem)
    },
    getExpectedHeaderText(index) {
        const expectedTexts = [
            'Основное',
            'Навигация',
            'Канбан',
            'Просмотр проекта',
            'Страница задачи'
        ];
        return expectedTexts[index];
    }
}
export default MainMenuElements;

const Elements={
    menuList:'.menu-list',
    activeMenuItem:'.router-link-exact-active'
}
