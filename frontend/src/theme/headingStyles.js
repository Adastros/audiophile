/*
These styles are only used for <Heading /> components
Due to bugs in textStyle and theme styles (using variants
for the the Heading component). Some prop styles like
fontSize and lineHeight don't work when combined with
Chakra UI's responsive styling patterns or work at all.
Using kebab-case works but an error is thrown in console
when done so.
*/

const headingStyles = {
  lgHeading: {
    fontSize: { base: '36px', md: '56px' },
    fontWeight: '700',
    lineHeight: { base: '40px', md: '58px' },
    letterSpacing: { base: '1.286px', md: '2px' },
    textTransform: 'uppercase',
  },
  mdHeading: {
    fontSize: { base: '28px', md: '40px' },
    fontWeight: '700',
    lineHeight: { base: 'normal', md: '44px' },
    letterSpacing: { base: '1px', md: '1.429px' },
    textTransform: 'uppercase',
  },
  productDetailName: {
    fontSize: { base: '28px', lg: '40px' },
    fontWeight: '700',
    lineHeight: { base: 'normal', md: '32px', lg: '44px' },
    letterSpacing: { base: '1px', lg: '1.429px' },
    textTransform: 'uppercase',
    textAlign: 'left',
  },
  productDetailSection: {
    fontSize: { base: '24px', md: '32px' },
    fontWeight: '700',
    lineHeight: '36px',
    letterSpacing: { base: '0.857px', md: '1.143px' },
    textTransform: 'uppercase',
  },
  secondaryProduct: {
    fontSize: '28px',
    fontWeight: '700',
    lineHeight: 'normal',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  cart: {
    fontSize: '1.125rem',
    fontWeight: '700',
    lineHeight: 'normal',
    letterSpacing: '1.286px',
    textTransform: 'uppercase',
  },
  checkoutSection: {
    fontSize: '0.8125rem',
    fontWeight: '700',
    lineHeight: 'normal',
    letterSpacing: '1.286px',
    textTransform: 'uppercase',
    color: 'brand.caramel',
  },
  checkoutHeading: {
    fontSize: { base: '28px', md: '32px' },
    fontWeight: '700',
    lineHeight: '36px',
    letterSpacing: { base: '1px', md: '1.143px' },
    textTransform: 'uppercase',
  },
  orderConfirmation: {
    fontSize: { base: '1.5rem', md: '2rem' },
    fontWeight: '700',
    lineHeight: { base: '1.75rem', md: '2.25rem' },
    letterSpacing: { base: '0.0535625rem', md: '0.0714375rem' },
    textTransform: 'uppercase',
  },
  errorStatus: {
    fontSize: { base: '2rem', md: '2.5rem', lg: '3.5rem' },
    fontWeight: '700',
    lineHeight: { base: '2.25rem', md: '2.75rem', lg: '3.625rem' },
    letterSpacing: { base: '0.071875rem', md: '0.125rem' },
    textTransform: 'uppercase',
  },
};

export default headingStyles;
