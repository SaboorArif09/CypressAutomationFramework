/// <reference types= "Cypress" />

describe("Verify radio buttons", () => {
    it("check and validate radio buttons", () => {
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({force:true})
        cy.get("input[type='radio']").first().check()
        cy.get("input[type='radio']").eq(1).check()
        cy.get("input[value='lettuce']").check().should('be.checked')
        cy.get("input[value='pumpkin']").should('not.be.checked')
        cy.get("input[value='cabbage']").should('be.disabled')

    })    
})