import footerTests from '../support/footerTests';
import headerTests from '../support/headerTests';

describe('Testing Homepage:', function () {
  beforeEach(function () {
    cy.visit('/');
  });

  describe('Home page header section:', function () {
    headerTests();
  });

  describe('Home page content:', function () {
    describe('Homepage banner displays', function () {
      it('the text "new product"', function () {
        cy.get('#homepage-banner').contains('new product', {
          matchCase: false,
        });
      });

      it('the correct product name', function () {
        cy.get('#homepage-banner').contains('XX99 MARK II HEADPHONES');
      });

      it('the correct hero subtext', function () {
        cy.get('#homepage-banner').contains(
          'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.'
        );
      });

      describe('a button', function () {
        it('that states "see product"', function () {
          cy.get('#homepage-banner')
            .get('button')
            .contains('see product', { matchCase: false });
        });
      });
    });

    describe('Homepage product category section displays', function () {
      it('a headphones thumbnail with a shop link', function () {
        cy.get('#product-categories').contains('headphones', {
          matchCase: false,
        });

        cy.get('#product-categories').contains('shop', {
          matchCase: false,
        });
      });

      it('a speakers thumbnail with a shop link', function () {
        cy.get('#product-categories').contains('speakers', {
          matchCase: false,
        });

        cy.get('#product-categories').contains('shop', {
          matchCase: false,
        });
      });

      it('an earphones thumbnail with a shop link', function () {
        cy.get('#product-categories').contains('earphones', {
          matchCase: false,
        });

        cy.get('#product-categories').contains('shop', {
          matchCase: false,
        });
      });
    });

    describe('Homepage product cards section displays', function () {
      describe('a primary card with', function () {
        it('the product name: ZX9 SPEAKER', function () {
          cy.get('#primary-product-card').contains('ZX9 SPEAKER');
        });

        it('the correct call to action text', function () {
          cy.get('#primary-product-card').contains(
            'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'
          );
        });

        it('a "see product" button', function () {
          cy.get('#primary-product-card')
            .get('button')
            .contains('see product', { matchCase: false });
        });
      });

      describe('a secondary card with', function () {
        it('the product name: ZX7 SPEAKER', function () {
          cy.get('#secondary-product-card').contains('ZX7 SPEAKER');
        });

        it('a "see product" button', function () {
          cy.get('#secondary-product-card')
            .get('button')
            .contains('see product', { matchCase: false });
        });
      });

      describe('tertiary cards with', function () {
        it('the product name YX1 EARPHONES in the second child card', function () {
          cy.get('#tertiary-product-cards')
            .children()
            .last()
            .contains('YX1 EARPHONES');
        });

        it('a "see product" button in the second child card', function () {
          cy.get('#tertiary-product-cards')
            .children()
            .last()
            .get('button')
            .contains('see product', { matchCase: false });
        });
      });
    });

    describe('Homepage closing section displays', function () {
      it('the correct heading', function () {
        cy.get('#closing').contains('Bringing you the best audio gear', {
          matchCase: false,
        });
      });

      it('the correct call to action', function () {
        cy.get('#closing').contains(
          'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.',
          {
            matchCase: false,
          }
        );
      });
    });

    describe('Homepage closing section displays', function () {
      it('the correct heading', function () {
        cy.get('#closing').contains('Bringing you the best audio gear', {
          matchCase: false,
        });
      });

      it('the correct call to action', function () {
        cy.get('#closing').contains(
          'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.',
          {
            matchCase: false,
          }
        );
      });
    });
  });

  describe('Homepage footer section:', function () {
    footerTests();
  });
});
