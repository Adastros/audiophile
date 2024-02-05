import footer from '../shared/footer.cy';
import header from '../shared/header.cy';
import homepageContent from '../pageContent/homepageContent.cy';
import cart from '../shared/cart.cy';

describe('Testing Home Page', function () {
  beforeEach(function () {
    cy.visit('/');
  });

  describe('Header', function () {
    header();
  });

  describe('Content', function () {
    homepageContent();
  });

  describe('Footer', function () {
    footer();
  });

  describe('Cart', function () {
    cart();
  });
});
