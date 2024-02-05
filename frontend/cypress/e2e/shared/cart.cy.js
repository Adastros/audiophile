function cart() {
  beforeEach(function () {
    cy.get('#cart-button').click();
  });

  it('Clicking the cart button opens the cart modal', function () {
    cy.get('.chakra-modal__content-container').should('exist');
    cy.get('.chakra-modal__overlay').should('exist');
  });
}

export default cart;
