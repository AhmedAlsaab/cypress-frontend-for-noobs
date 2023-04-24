describe('todo-1, fix the issues', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.get('onetrust-accept-btn-handler').click();
  });

  it('Verifies the number of category links', () => {
    cy.get('.category-links').find('li').should('have.length', 7);
  });

  it('Verifies the category links contain the correct language names', () => {
    const languageNames = ['Node.js', 'Ruby', 'Python', 'Java', 'PHP', 'Go', 'Clojure'];

    cy.get('.category-links')
      .find('span')
      .each(($el) => {
        expect(languageNames).to.include($el.text());
      });
  });

  it('Verifies the user navigates to the correct page when selecting a language', () => {
    let languageToSelect = 'Node.js';

    cy.get('.category-links').find('span').contains(languageToSelect).parent().click();

    languageToSelect = 'Scala';

    cy.url().should('eq', `https://devcenter.heroku.com/categories/${languageToSelect}-support`);
  });

  it('Searches for Cypress env variables', () => {
    cy.visit('/search');

    cy.get('#search-input').type(Cypress.env('dummy_variable_1'));

    cy.get('#search-input').type(Cypress.env('dummy_variable_2'));
  });
});
