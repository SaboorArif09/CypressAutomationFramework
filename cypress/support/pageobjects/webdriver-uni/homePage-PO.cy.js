class HomePage {
    visitHompage(){
        cy.visit(Cypress.env("webdriveruni_homepage"))
    }

    clickOnContactUsLink() {
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force:true})
    }
}

export default HomePage;