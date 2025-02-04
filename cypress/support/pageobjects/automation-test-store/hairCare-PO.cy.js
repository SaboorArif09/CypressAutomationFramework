class HairCare {
    addHairCareProductToCart() {
        globalThis.data.productName.forEach(function (element) {
            cy.addProductToBasket(element).then(() => {
                debugger
            })
        })
        cy.get('.dropdown-toggle > .fa').click();
    }
}

export default HairCare;