/// <reference types="Cypress" />

context('Main Flow', () => {
  beforeEach(() => {
    cy.server()
    cy.fixture('results.json').as('results')

    cy.route({
      method: 'POST',
      url: 'https://fe-test-zyper-engagement.herokuapp.com/start',
      response: 'beep-boop-some-id'
    }).as('postUsernames')
    cy.route('GET', 'https://fe-test-zyper-engagement.herokuapp.com/results/*', '@results').as('getResults')

    cy.visit('http://localhost:3000')
  })

  it('can enter input and show results', () => {

    cy.get('#submitButton').should('be.disabled');
    cy.get('#usernamesInput').type('bla,boo');
    cy.get('#submitButton').should('not.be.disabled');
    cy.get('#submitButton').click();

    cy.wait(['@postUsernames', '@getResults']).then(() => {
      expect(Cypress.$('.result').length).to.equal(2);
    });

  });

  it('shows error message on bad network request', () => {
    cy.route({
      method: 'POST',
      url: 'https://fe-test-zyper-engagement.herokuapp.com/start',
      response: 'bad request for you',
      status: 404
    }).as('postUsernames')

    expect(Cypress.$('.MuiSnackbarContent-message')).to.not.exist;

    cy.get('#usernamesInput').type('bla,boo');
    cy.get('#submitButton').click();

    cy.wait('@postUsernames').then(() => {
      const expectedErrorMessage = 'Something went wrong POSTing usernames: Error: Request failed with status code 404';
      expect(Cypress.$('.MuiSnackbarContent-message')).to.exist;
      expect(Cypress.$('.MuiSnackbarContent-message')).to.contain(expectedErrorMessage);
    });
  })
})
