/// <reference types= "Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    before(() => {
        cy.fixture('userDetails').as('user')
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href$='contact']").click().then( (text)=> {
            cy.log("Text of the click lin:" + text.text())
        })
        // cy.xpath("//a[contains(@href,'contact')]").click()
        cy.get('@user').then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email)
        })
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("this is an enquiry")
        cy.get("button[title='Submit']").click()
        cy.contains("successfully").should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log("This test is passed")
  })
})