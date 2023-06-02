/// <reference types= "Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#contact-us").invoke('removeAttr', 'target').click({ force: true })
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.reload(true)
        cy.url().should('include', 'http://www.webdriveruniversity.com/')

        cy.go('forward')
        cy.url().should('include', 'contactus')
        cy.go('back')

        cy.get('#to-do-list').invoke('removeAttr', 'target').click({ force: true })
        cy.url().should('include', 'To-Do-List')
        cy.go('back')
    })
})