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

		cy.get(".btn__delete").first().should("be.visible").click();

		cy.contains(".table__body", "Bob").should("not.exist");
	});

	it("must validate edit an employee with invalid data", () => {
		cy.visit("http://localhost:3000");
	
		cy.get(".btn__edit").first().should("be.visible").click();
	
		cy.get("#nameInput").clear();
	
		cy.get(".form__action > .btn__primary").click();

		cy.get(':nth-child(1) > .label').should("contain", "Full name is required!");
	
	
		cy.get("#nameInput").type("Bob");
		cy.get("#emailInput").clear().type("bob@invalid");
	
		cy.get(".form__action > .btn__primary").click();
	
		cy.get(':nth-child(2) > .label').should("contain", "Invalid email address!");
	});

	it("must validate adding a new employee with invalid name", () => {
		cy.visit("http://localhost:3000");
	
		cy.get(".header > .btn").should("be.visible").click();
	
		cy.get("#emailInput").type("john@example.com");
		cy.get("#addressArea").type("123 Main St, Anytown, USA");
		cy.get("#phoneNumber").type("55555588855");
	
		cy.get(".form__action > .btn__primary").click();
	
		cy.get(':nth-child(1) > .label').should("contain", "Full name is required!");
	});

	it("must validate adding a new employee with invalid e-mail", () => {
		cy.visit("http://localhost:3000");
	
		cy.get(".header > .btn").should("be.visible").click();
	
		cy.get("#nameInput").type("John Doe");
		cy.get("#emailInput").type("john@example");
		cy.get("#addressArea").type("123 Main St, Anytown, USA");
		cy.get("#phoneNumber").type("55555588855");
	
		cy.get(".form__action > .btn__primary").click();
	
		cy.get(':nth-child(2) > .label').should("contain", "Invalid email address!");
	});

	it("must validate adding a new employee with invalid phone", () => {
		cy.visit("http://localhost:3000");
	
		cy.get(".header > .btn").should("be.visible").click();
	
		cy.get("#nameInput").type("John Doe");
		cy.get("#emailInput").type("john@example.com");
		cy.get("#addressArea").type("123 Main St, Anytown, USA");
	
		cy.get(".form__action > .btn__primary").click();
	
		cy.get(':nth-child(4) > .label').should("contain", "Phone is required!");
	});

	it("must validate adding a new employee with invalid phone (minimum char)", () => {
		cy.visit("http://localhost:3000");
	
		cy.get(".header > .btn").should("be.visible").click();
	
		cy.get("#nameInput").type("John Doe");
		cy.get("#emailInput").type("john@example.com");
		cy.get("#addressArea").type("123 Main St, Anytown, USA");
		cy.get("#phoneNumber").type("1234567891");

	
		cy.get(".form__action > .btn__primary").click();
	
		cy.get(':nth-child(4) > .label').should("contain", "Minimum of 11 digits");
	});

	it("must validate adding a new employee with invalid phone (max char)", () => {
		cy.visit("http://localhost:3000");
	
		cy.get(".header > .btn").should("be.visible").click();
	
		cy.get("#nameInput").type("John Doe");
		cy.get("#emailInput").type("john@example.com");
		cy.get("#addressArea").type("123 Main St, Anytown, USA");
		cy.get("#phoneNumber").type("1234567891234");

	
		cy.get(".form__action > .btn__primary").click();
	
		cy.get(':nth-child(4) > .label').should("contain", "Maximum of 12 digits");
	});
});
