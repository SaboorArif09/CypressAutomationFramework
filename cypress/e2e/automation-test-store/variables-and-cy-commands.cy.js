/// <reference types= "Cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/")
        //The following will fail
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // makeupLink.click();
        // skincareLink.click();

        //The following will pass
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeupLink.click();
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // skincareLink.click();

        //Recommended Approach
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
    });
    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()

        //Following code will fail
        // const header = cy.get("h1 .maintext");
        // cy.log(header.text())

        cy.get('h1 .maintext').then( (text) => {
            const headerText = text.text()
            cy.log("Text of Header is:" + headerText)
            expect(headerText).is.eql('Makeup')
        })
    })

    it.only("Validate properties of  the Contact Us page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")
        // uses cypress commands and chaining
        cy.contains("#ContactUsFrm", 'Contact Us Form').find("#field_11").should('contain', 'First name')

        // jquery approach
        cy.contains("#ContactUsFrm", 'Contact Us Form').then((text) => {
            const firstNameText = text.find("#field_11").text()
            expect(firstNameText).to.contain('First name')

            //embedded commands (closure)
            cy.get("#field_11").then((txt) => {
                cy.log(txt.text())
                cy.log(txt)
            })
        })
    })
})