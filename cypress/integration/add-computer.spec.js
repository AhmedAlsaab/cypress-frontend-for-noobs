describe("Landing page", () => {
  beforeEach(() => cy.visit("/"));

  it("Clicks on the 'Add a new computer' button", () => {
    cy.get("#add").click();
  });

  // Should fail, why?
  it("Adds all the required details into the 'Add a computer' form", () => {
    cy.get("#name").type("A value");
    cy.get("#introduced").type("A value");
    cy.get("#discontinued").type("A value");
  });

  // Should fail, why?
  it("Selects an option from the 'Company' dropdown", () => {
    cy.get("#add").click();
    cy.get("#company").select("Apple Inc.");
    cy.get("#company").select("Samsung Inc");
  });
});
