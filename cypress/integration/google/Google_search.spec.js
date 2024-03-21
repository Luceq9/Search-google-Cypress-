// Easy test in cypress for google search
// Start app: npm run open
// Author: Luceq

describe('Test Home', () => {
	it('Visit Home', () => {
		cy.visit('https://www.google.com/')
		cy.get('#L2AGLb').click()
		cy.get('textarea.gLFyf').type('Mercedes 190{enter}')
		//  this cy.get('.YmvwI').eq(0).click() or cy.get('.GKS7s').eq(0).click()
		cy.get('.GKS7s')
			.eq(0)
			.click()
		/* Visual Testing (Percy.io)
        cy.percySnapshot('mercedes')
        */
	})
})
