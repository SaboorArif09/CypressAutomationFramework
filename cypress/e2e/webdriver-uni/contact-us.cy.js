import HomePage from "../../support/pageobjects/webdriver-uni/homePage-PO.cy";
import ContactUsPage from "../../support/pageobjects/webdriver-uni/contactusPage-PO.cy";
/// <reference types= "Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  const homepage = new HomePage()
  const contactus = new ContactUsPage()

  before(() => {
    cy.fixture("example").then((data) => {
      // this.data = data
      globalThis.data = data;
    })
  })
  beforeEach(() => {
    homepage.visitHompage();
    homepage.clickOnContactUsLink();
  })
  it("Should be able to submit a successful submission via contact us form", () => {
      
      cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
      cy.title().should('include', 'WebDriver | Contact Us')
      cy.url().should('include', 'http://www.webdriveruniversity.com/Contact-Us/contactus.html')
      // cy.get('[name="first_name"]').type(data.first_name)
      // cy.get('[name="last_name"]').type(data.last_name)
      // cy.get('[name="email"]').type(data.email)
      // cy.get('textarea.feedback-input').type("random text")
      // cy.get('[type="submit"]').click()
      // cy.contains('Thank You').should('have.text', 'Thank You for your Message!')
      //  cy.fillForm(data.first_name, data.last_name, data.email, "This is just a random text", "h1", "Thank You for your Message!")
      
       contactus.fillForm(data.first_name, data.last_name, data.email, "This is just a random text", "h1", "Thank You for your Message!")
    })

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    
    // cy.get('[name="first_name"]').type(data.first_name)
    // cy.get('[name="last_name"]').type(data.last_name)
    // // cy.get('[name="email"]').type("joe@gmail.com")
    // cy.get('textarea.feedback-input').type("random text")
    // cy.get('[type="submit"]').click()
    // cy.get('body').contains('Error: all fields are required')

    contactus.fillForm(data.first_name, data.last_name, data.email, "This is just a random text", "h1", "Thank You for your Message!")

    // cy.fillForm(data.first_name, data.last_name, " ", "This is just a random text", "body", "Error: Invalid email address")
  });
})