
describe("form tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza")
    })
    it("unit tests", () => {
        testText(nameInput())
        testText(specialInput())
        testCheckbox(olivesInput())
        testCheckbox(baconInput())
        testCheckbox(pineappleInput())
        testCheckbox(chickenInput())
        sizeInput()
            .select("large")
            .should("have.value", "large")
    })
    it("submit test", () => {
        submitBtn().should("be.disabled")
        nameInput().type("name")
        submitBtn().should("not.be.disabled")
    })
})
const testCheckbox = checkbox => {
    checkbox
        .should("not.be.checked")
        .check()
        .should("be.checked")
}
const testText = textInput => {
    textInput
        .should("have.value", "")
        .type("bleh")
        .should("have.value", "bleh")
}
const nameInput = () => cy.get("#name-input"); 
const sizeInput = () => cy.get("#size-dropdown");
const olivesInput = () => cy.get("[name='olives']");
const baconInput = () => cy.get("[name='bacon']");
const chickenInput = () => cy.get("[name='chicken']");
const pineappleInput = () => cy.get("[name='pineapple']");
const specialInput = () => cy.get("#special-text");
const submitBtn = () => cy.get("#order-button");
