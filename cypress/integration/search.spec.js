
describe('Search', ()=> {
     it('Success Search', () => {

        //visit url
        cy.visit('http://localhost:8080/characters')

        //input keyword
        cy.get('input[name=Search]').type("storm")

        //Click Search button
        cy.get('button').contains('Search').click()

        //assert correct URL
        cy.url().should('contain', 'http://localhost:8080/characters')

     })
})