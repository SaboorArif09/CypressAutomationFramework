/// <reference types= "Cypress" />

describe("Test Datepicker via webdriveruni", () => {
    it("Select date from the datepicker", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#datepicker").invoke('removeAttr', 'target').click({ force: true })

        cy.get('#datepicker').click()

        // let date = new Date()
        // date.setDate(date.getDate())
        // cy.log(date.getDate()) //get current day i.e. 26

        // let date1 = new Date()
        // date1.setDate(date.getDate() + 5) 
        // cy.log(date1.getDate()) //get current day i.e. 26 + 5 = 31

        var date = new Date()
        date.setDate(date.getDate() + 50)

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", { month: "long" })
        var futureDay = date.getDate()

        cy.log('Future Year to Select: ' + futureYear)
        cy.log('Future Month to Select: ' + futureMonth)
        cy.log('Future Date to Select: ' + futureDay)

        function SelectMOnthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentDate) => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click()
                    SelectMOnthAndYear()
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentDate) => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click()
                        SelectMOnthAndYear()
                    }
                })
            })
        }
        function SelectDay() {
            cy.get('[class ="day"]').contains(futureDay).click()
        }
        SelectMOnthAndYear()
        SelectDay()
    })    
})