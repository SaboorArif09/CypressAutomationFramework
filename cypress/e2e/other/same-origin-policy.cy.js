/// <reference types= "Cypress" />

describe("Cypress web security", () => {
    // it("Validate visiting two different domanins", () => {
    //     cy.visit("http://www.webdriveruniversity.com")
    //     cy.visit("https://automationteststore.com")
    //     cy.url().should('include', 'https://automationteststore.com')
    // })

    it("Validate visiting two different domains via user action", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#automation-test-store").invoke('removeAttr', 'target').click()
    });
})