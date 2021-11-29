describe("Counter test E2E", () => {
  it("visit the counter page", () => {
    cy.visit("http://localhost:3000/");
  });

  it("increment and decrement buttons render ok", () => {
    cy.get("#add").should("be.visible");
    cy.get("#subtract").should("be.visible");
  });

  it("should increment number to 2 after 2 clicks", () => {
    const buttonAdd = cy.get("#add");
    buttonAdd.click();
    buttonAdd.click();

    const number = cy.get("#counter");
    number.contains(2);
  });

  it("should decrement number to 0 after 2 clicks", () => {
    const buttonSubtract = cy.get("#subtract");
    buttonSubtract.click();
    buttonSubtract.click();

    const number = cy.get("#counter");
    number.contains(0);
  });

  it("should change number button set number value to input value", () => {
    cy.get("#input").clear();
    cy.get("#input").type("55");
    cy.get("#change").click();
    cy.get("#counter").should("have.text", "55");
  });

  it("should reset number value to 0 with reset button", () => {
    const buttonReset = cy.get("#reset");
    buttonReset.click();

    const number = cy.get("#counter");
    number.contains(0);
  });
});
