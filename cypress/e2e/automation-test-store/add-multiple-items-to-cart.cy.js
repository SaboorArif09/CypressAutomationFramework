import HomePage_auto from "../../support/pageobjects/automation-test-store/HomePage-PO.cy";
import HairCare from "../../support/pageobjects/automation-test-store/hairCare-PO.cy";
/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
    const homepage_auto = new HomePage_auto()
    const haircare = new HairCare()

    before(function () {
      cy.fixture("products").then(function (data) {
        globalThis.data = data;
      });
    });
  
    beforeEach(function () {
      homepage_auto.accessHompage()
      homepage_auto.ClcikOnHairCutPage() 
    });
    
    it("Add specific items to basket", () => {
        haircare.addHairCareProductToCart()
    });
  });
  