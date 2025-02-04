/// <reference types= "Cypress" />

describe("Verify mouse actions", () => {
    it("Scroll element into view", () => {
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        
    })    

    it("should be able to drag and drop element", () => {
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get('#draggable').trigger('mousedown', {which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
        
    }) 
    
    it("should be able to perform a double mouse click", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        cy.get('#double-click').dblclick();
    })

    it.only("I should be able to hold down the left mouse click button on a given element", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        cy.get('#click-box').trigger('mousedown', {which:1}).then(($el) => {
            expect($el).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    });
})