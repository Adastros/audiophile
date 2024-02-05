function header() {
  describe('Header section displays', function () {
    context('viewport 640 x 480', () => {
      it('a menu button', function () {
        cy.viewport(640, 480);
        cy.get(`[data-cy='menu-button']`).should('exist');
      });
    });

    // General mobile view test. Can be any mobile viewport resolution
    context('mobile view - iphone xr', () => {
      it('a menu button', function () {
        cy.viewport('iphone-xr');
        cy.get(`[data-cy='menu-button']`).should('exist');
      });
    });

    it('the company logo and cart button', function () {
      cy.get(`[data-cy='logo']`).should('exist');
      cy.get(`[data-cy='cart-button']`).should('exist');
    });
  });
}

export default header;
