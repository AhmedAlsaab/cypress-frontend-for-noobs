describe("cy.visit()", () => {
  before(() => cy.visit("/"));

  // Should fail, why?
  it("Visit the landing page", () => {
    cy.log("If this logs, you have correctly fixed the visit command above!");
  });

  // Should fail, why?
  it("Expects the url string to include 'computers", () => {
    cy.url().should("include", "computerS");
  });

  // Should fail, why?
  it("Expects the url string to include 'computer, database, herokuapp", () => {
    const expectedUrlStrings = ["computers", "databaSe", "herokuapp"];

    expectedUrlStrings.forEach((expectedString) => {
      cy.url().should("include", expectedString);
    });
  });
});
