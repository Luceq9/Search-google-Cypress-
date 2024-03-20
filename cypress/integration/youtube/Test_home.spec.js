describe('Test Home', () => {
	it('Visit Home', () => {
		cy.visit('https://www.google.com/')
		cy.get('#L2AGLb').click()
		cy.get('textarea.gLFyf').type('Mercedes 190{enter}')
		cy.get('.GKS7s')
			.eq(0)
			.click()

		/* Visual Testing (Percy.io)
        cy.percySnapshot('mercedes')
        */

		// test

		//cy.get('.gLFyf').type('Mercedes 190{enter}')
	})
})
