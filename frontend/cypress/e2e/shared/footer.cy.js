function footer() {
  describe('Footer section displays', function () {
    it('the company logo', function () {
      cy.get(`[data-cy='footer']`).find(`[data-cy='logo']`).should('exist');
    });

    it('4 navigation links', function () {
      cy.get(`[data-cy='footer']`)
        .find(`[data-cy='nav-links']`)
        .children()
        .should('have.length', 4);
    });

    it('links to the home, headphones, speakers, earphones pages', function () {
      cy.get(`[data-cy='footer']`)
        .find(`[data-cy='nav-links']`)
        .children()
        .first()
        .should('have.text', 'HOME')
        .next()
        .should('have.text', 'HEADPHONES')
        .next()
        .should('have.text', 'SPEAKERS')
        .next()
        .should('have.text', 'EARPHONES');
    });

    it('the correct About text', function () {
      cy.get(`[data-cy='footer']`).contains(
        `Audiophile is an all in one stop to fulfill your audio needs.`
      );
    });

    it('the correct copyright text', function () {
      cy.get(`[data-cy='footer']`).contains(
        'Copyright 2021 - 2023. All Rights Reserved'
      );
    });

    it('3 social media icons', function () {
      cy.get(`[data-cy='footer']`)
        .find(`[data-cy='social-links']`)
        .children()
        .should('have.length', 3);
    });
  });
}

export default footer;
