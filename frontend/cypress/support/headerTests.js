const headerTests = () => {
  describe('Header section displays', function () {
    it('a menu button', function () {
      cy.get('#menu-button').should('exist');
    });

    it('the company logo', function () {
      cy.get('#logo').should('exist');
    });

    it('the cart button', function () {
      cy.get('#cart-button').should('exist');
    });
  });
};

export default headerTests;
