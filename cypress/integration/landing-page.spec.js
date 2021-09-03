describe("Landing page", () => {
  before(() => cy.visit("/"));

  it("Verifies the 'Filter by name' button exists", () => {
    cy.get("#searchsubmit").should("have.length", 1);
  });

  // Should fail, why?
  it("Verifies the 'Add a new computer' button exists", () => {
    cy.get("#theId").should("have.length", 1);
  });

  // Should fail, why?
  it("Verifies the 'Add a new computer' button has the correct text", () => {
    cy.get("theId").should("have.text", "Add a new computer");
  });

  // Should fail, why?
  it("Verifies the landing page title contains the text 'computers found", () => {
    cy.get("#main").find("h1").should("contain", "Computers Found");
  });

  it("Verifies that the number of displayed computers is 1 to 10", () => {
    cy.get(".current").find("a").should("contain", "1 to 10");
  });

  // Should fail, why? (What needs to happen?)
  it("Verifies that the number of displayed computers is 11 to 20", () => {
    cy.get(".current").find("a").should("contain", "11 to 20");
  });
});
