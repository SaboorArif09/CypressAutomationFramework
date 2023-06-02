/// <reference types= "Cypress" />

describe("Handling data table", () => {
    it("Calculate and assert the total age of all users", () => {
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#data-table").invoke('removeAttr', 'target').click({force:true})

        var userData = [];
        let numb = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userData[index] = $el.text()
        }).then(() =>{
            var i;
            for(i = 0; i < userData.length; i++){
                if(Number(userData[i])){
                    numb += Number(userData[i])
                }
                // cy.log(userData[i])
            }
            cy.log('Find total age:' + numb)
            expect(numb).to.eq(322)
        })
  
    })    

    it.only("Calculate and assert the total age of all users", () => {
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#data-table").invoke('removeAttr', 'target').click({force:true})

        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes('Woods')){
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((age) => {
                    const userAge = age.text()
                    expect(userAge).to.eq('80')
                })
            }
        })
         
  
    })   
})