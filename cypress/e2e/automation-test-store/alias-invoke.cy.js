/// <reference types= "Cypress" />

describe("Alias and Invoke", () => {
    it("Validate the thumbnail and add to cart icon", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.thumbnail').as('thumbNail')
        cy.get('@thumbNail').should('have.length', 16)
        cy.get('.thumbnail').find('.productcart').invoke('attr', 'title').as('productCart')
        cy.get('@productCart').should('include', 'Add to Cart')
    });

    it("Validate a specific hair care product", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('ProductName')
        cy.get('@ProductName').its('length').should('be.greaterThan', 5)
        cy.get('@ProductName').should('include', 'Seaweed Conditioner')
    });

    it.only("Validate the thumbnail and add to cart icon", () => {
        cy.visit("https://automationteststore.com/")
        // cy.get('.thumbnail').as('thumbNail')
        // cy.get('@thumbNail').find('.oneprice').each(($el, index) => {
        //     cy.log($el.text())
        // })

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('ItemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('SaleItemPrice')
        var itemsTotal = 0;
        cy.get('@ItemPrice').then(($lt) => {
            var totalItemPrice = 0;
            var itemPrice = $lt.split('$')
            var i;
            for(i = 0; i < itemPrice.length; i++){
                cy.log(itemPrice[i])
                totalItemPrice += Number(itemPrice[i])
            }
            itemsTotal += totalItemPrice;
            cy.log('Total Non Sale Products price:' + totalItemPrice)
        })

        cy.get('@SaleItemPrice').then(($lt) => {
            var totalSaleItemPrice = 0;
            var saleItemPrice = $lt.split('$')
            var i;
            for(i = 0; i < saleItemPrice.length; i++){
                cy.log(saleItemPrice[i])
                totalSaleItemPrice += Number(saleItemPrice[i])
            }
            itemsTotal += totalSaleItemPrice;
            cy.log('Total Sale Products price:' + totalSaleItemPrice)
        })
        .then( () => {
            cy.log('The Total Price of all Products: ', +itemsTotal)
            expect(itemsTotal).to.equal(656.5)
        })
    });

})