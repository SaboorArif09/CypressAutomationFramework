/// <reference types= "Cypress" />

describe("Handle JS Alerts", () => {
    it("Confirm js alerts contain the correct text", () => {
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({ force: true })
        
        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.eql('I am an alert box!')
        })
    })
    it("Vaalidate js confirm alert box correctly when clicking cancel ", () => {
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({ force: true })
        
        cy.get('#button4').click()
        cy.on('window:confirm', () => {
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    })

    it.only("Vaalidate js confirm alert box using stub ", () => {
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({ force: true })
        
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#button4').click().then( () => {
            expect(stub.getCall(0)).to.be.calledWith("Press a button!")
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })

    })
})