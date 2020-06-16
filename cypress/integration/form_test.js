describe("Tests user inputs", () => {
    beforeEach(function () {
        cy.visit("http://localhost:3000/OrderForm");
    });
// name text input field test 
    it("Locates / tests name input", () => {
        cy.get("[name=name]")
            .type("John Q. Customer")
            .should("have.value", "John Q. Customer")
    });
// special instructions textarea input test
    it("Locates / tests instructions input", () => {
        cy.get("[name=instructions]")
            .type("extra crispy crust please")
            .should("have.value", "extra crispy crust please")
    });
// (multiple) toppings checkbox test 
    it("Tests for multiple topping selection capability", () => {
        cy.get("[name=pepperoni]")
            .check()
            .should("be.checked");
        cy.get("[name=jalapeños]")
            .check()
            .should("be.checked");
    })
// form submission test
    it("Tests for form submission capability", () => {
        cy.get("form")
            .submit()
    })

});