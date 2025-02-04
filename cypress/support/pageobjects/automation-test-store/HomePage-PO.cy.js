class HomePage_auto {
    accessHompage() {
        cy.visit("https://automationteststore.com/");
    }
    ClcikOnHairCutPage() {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }
}

export default HomePage_auto;