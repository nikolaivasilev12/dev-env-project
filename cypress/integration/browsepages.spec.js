describe('Go through all Sub Pages', ()=> {
    it('Success browsing', () => {

       //visit url
       cy.visit('http://localhost:8080/')

       //Click characters button
       cy.get('#charactersImg').click()
       cy.get('#comics').click()
       cy.get('#series').click()
       cy.get('#stories').click()
       cy.get('#home').click()

       //assert if correct URL
       cy.url().should('contain', 'http://localhost:8080')

    })
})