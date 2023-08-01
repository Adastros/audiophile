const footerTests = () => {
  describe('Footer section displays', function () {
    it('the company logo', function () {
      cy.get('#footer').get('#logo').should('exist');
    });

    it('4 navigation links', function () {
      cy.get('#footer').get('#nav-links').children().should('have.length', 4);
    });

    it('links to the home, headphones, speakers, earphones', function () {
      cy.get('#nav-links').contains('home', { matchCase: false });
      cy.get('#nav-links').contains('headphones', { matchCase: false });
      cy.get('#nav-links').contains('speakers', { matchCase: false });
      cy.get('#nav-links').contains('earphones', { matchCase: false });
    });

    it('the correct about text', function () {
      cy.get('#footer').contains(
        `Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.`
      );
    });

    it('the correct copyright text', function () {
      cy.get('#footer').contains('Copyright 2021 - 2023. All Rights Reserved');
    });

    it('3 social media icons', function () {
      cy.get('#social-links').children().should('have.length', 3);
    });
  });
};

export default footerTests;
