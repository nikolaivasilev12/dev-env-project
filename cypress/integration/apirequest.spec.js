describe('API fetch Request', ()=> {
    it('GET Characters', () => {

        cy.intercept({
            method: 'GET',
            url: 'http://localhost:4000/characters',
          }).as('apiCheck')

          cy.visit('http://localhost:8080/characters')
          cy.wait('@apiCheck').then((interception) => {
            assert.isNotNull(interception.response.body, '1st API call has data')
          })

    })
    it('GET Comics', () => {

        cy.intercept({
            method: 'GET',
            url: 'http://localhost:4000/comics',
          }).as('apiCheck')

          cy.visit('http://localhost:8080/comics')
          cy.wait('@apiCheck').then((interception) => {
            assert.isNotNull(interception.response.body, '2nd API call has data')
          })

    })
    it('GET Series', () => {

        cy.intercept({
            method: 'GET',
            url: 'http://localhost:4000/series',
          }).as('apiCheck')

          cy.visit('http://localhost:8080/series')
          cy.wait('@apiCheck').then((interception) => {
            assert.isNotNull(interception.response.body, '3nd API call has data')
          })

    })
    it('GET Stories', () => {

        cy.intercept({
            method: 'GET',
            url: 'http://localhost:4000/stories',
          }).as('apiCheck')

          cy.visit('http://localhost:8080/stories')
          cy.wait('@apiCheck').then((interception) => {
            assert.isNotNull(interception.response.body, '4th API call has data')
          })

    })
})