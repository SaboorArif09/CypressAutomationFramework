/// <reference types= "Cypress" />

describe("Verify autocomlete dropdown list", () => {
    it("select specific product from autocomplete dropdown list", () => {
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#autocomplete-textfield").invoke('removeAttr', 'target').click({ force: true })

        cy.get('#myInput').type('a')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text()
            const selctedProd = 'Apple'
            if (prod === selctedProd) {
                cy.wrap($el).click()

                cy.get('#submit-button').click()
                cy.url().should('include', selctedProd)
            }
        }).then(() => {
            cy.get('#myInput').type('g')
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text()
                const selctedProd = 'Grapes'
                if (prod === selctedProd) {
                    cy.wrap($el).click()

                    cy.get('#submit-button').click()
                    cy.url().should('include', selctedProd)
                }
            })
        })
    })
})