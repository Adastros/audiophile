function homepageContent() {
  describe('Homepage banner displays', function () {
    it('the text "new product"', function () {
      cy.get(`[data-cy='homepage-banner']`).contains('new product', {
        matchCase: false,
      });
    });

    it('the correct product name', function () {
      cy.get(`[data-cy='homepage-banner']`).contains('XX99 MARK II HEADPHONES');
    });

    it('the correct hero subtext', function () {
      cy.get(`[data-cy='homepage-banner']`).contains(
        'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.'
      );
    });

    describe('a button', function () {
      it('that states "see product"', function () {
        cy.get(`[data-cy='homepage-banner']`)
          .find(`[data-cy='see-product-button']`)
          .contains('see product', { matchCase: false });
      });
    });
  });

  describe('Homepage product category section displays', function () {
    it('a headphones thumbnail with a shop link', function () {
      cy.get(`[data-cy='product-categories']`)
        .children()
        .first()
        .find(`[data-cy='product-category-thumbnail-text']`)
        .contains('headphones', { matchCase: false });
    });

    it('a speakers thumbnail with a shop link', function () {
      cy.get(`[data-cy='product-categories']`)
        .children()
        .first()
        .next()
        .find(`[data-cy='product-category-thumbnail-text']`)
        .contains('speakers', { matchCase: false });
    });

    it('an earphones thumbnail with a shop link', function () {
      cy.get(`[data-cy='product-categories']`)
        .children()
        .last()
        .find(`[data-cy='product-category-thumbnail-text']`)
        .contains('earphones', { matchCase: false });
    });

    it('three total shop links (one for each thumbnail)', function () {
      cy.get(`[data-cy='product-categories']`)
        .find(`[data-cy='shop-link']`)
        .should('have.length', 3);
    });
  });

  describe('Homepage product cards section displays', function () {
    describe('a primary card with', function () {
      it('the product name: ZX9 SPEAKER', function () {
        cy.get(`[data-cy='primary-product-card']`).contains('ZX9 SPEAKER');
      });

      it('the correct call to action text', function () {
        cy.get(`[data-cy='primary-product-card']`).contains(
          'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'
        );
      });

      it('a "see product" button', function () {
        cy.get(`[data-cy='primary-product-card']`)
          .find(`[data-cy='see-product-button']`)
          .contains('see product', { matchCase: false });
      });
    });

    describe('a secondary card with', function () {
      it('the product name: ZX7 SPEAKER', function () {
        cy.get(`[data-cy='secondary-product-card']`).contains('ZX7 SPEAKER');
      });

      it('a "see product" button', function () {
        cy.get(`[data-cy='secondary-product-card']`)
          .find(`[data-cy='see-product-button']`)
          .contains('see product', { matchCase: false });
      });
    });

    describe('tertiary cards with', function () {
      it('the product name YX1 EARPHONES in the second child card', function () {
        cy.get(`[data-cy='tertiary-product-cards']`).contains('YX1 EARPHONES');
      });

      it('a "see product" button in the second child card', function () {
        cy.get(`[data-cy='tertiary-product-cards']`)
          .find(`[data-cy='see-product-button']`)
          .contains('see product', { matchCase: false });
      });
    });
  });

  describe('Homepage closing section displays', function () {
    it('the correct heading', function () {
      cy.get(`[data-cy='closing']`).contains(
        'Bringing you the best audio gear',
        { matchCase: false }
      );
    });

    it('the correct call to action', function () {
      cy.get(`[data-cy='closing']`).contains(
        'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.',
        { matchCase: false }
      );
    });
  });
}

export default homepageContent;
