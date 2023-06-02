/// <reference types= "Cypress" />

describe("Verify checkboxes", () => {
    it("check/uncheck and validate checkboxes", () => {
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({force:true})
        
        cy.get("input[value='option-1']").check().should('be.checked')
        cy.get("input[value='option-3']").uncheck().should('not.be.checked')
        cy.get("input[type='checkbox']").check(['option-2', 'option-4']).should('be.checked')

    })    
})
