describe("template spec", () => {
	it("must visit the home page and validate the componentes", () => {
		cy.visit("http://localhost:3000");

		cy.get(".header__h1").should("be.visible");
		cy.get(".header > .btn").should("be.visible");

		cy.get(".table").should("be.visible");
	});

	it("must validate add new", () => {
		cy.visit("http://localhost:3000");

		cy.get(".header > .btn").should("be.visible").click();

		cy.get("#nameInput").type("John Doe");
		cy.get("#emailInput").type("john@example.com");
		cy.get("#addressArea").type("123 Main St, Anytown, USA");
		cy.get("#phoneNumber").type("55555588855");

		cy.get(".form__action > .btn__primary").click();
	});

	it("must validate edit an employee", () => {
		cy.visit("http://localhost:3000");

		cy.get(".btn__edit").first().should("be.visible").click();

		cy.get("#nameInput").clear().type("Bob");

		cy.get(".form__action > .btn__primary").click();

		cy.contains(".table__body", "Bob").should("be.visible");
	});

	it("must validate delete an employee", () => {
		cy.visit("http://localhost:3000");

		cy.get(".btn__delete").click();

		cy.contains(".table__body", "Bob").should("not.exist");
	});
});
