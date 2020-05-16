describe("Tests user inputs", () => {
    beforeEach(function () {
        cy.visit("http://localhost3000");
    });

    it("Locates / tests name input", () => {
        cy.get("[name=name]")
            .type("John Q. Customer")
            .should("have.value", "John Q. Customer")
    });

});