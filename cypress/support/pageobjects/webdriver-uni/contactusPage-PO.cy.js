class ContactUsPage {
    fillForm(firstName, lastName, email, comment, $locator, textToLocate) {
        cy.get('[name="first_name"]').type(firstName)
        cy.get('[name="last_name"]').type(lastName)
        cy.get('[name="email"]').type(email)
        cy.get('textarea.feedback-input').type(comment)
        cy.get('[type="submit"]').click()
        cy.get($locator).contains(textToLocate)
    }
}

export default ContactUsPage;