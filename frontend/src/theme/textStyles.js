// Due to some bugs in Chakra UI, certain css
// properties are not applied if they are not
// defined in Chakra UI. One way around it is to
// name the css style directly but error messages
// about using it due to kebab-case of css.
//
// See
// https://github.com/chakra-ui/chakra-ui/discussions/3612
// https://github.com/chakra-ui/chakra-ui/issues/3884
//
// For now, these styles will only apply to Text components
const textStyles = {
  textStyles: {
    thumbnailText: {
      fontSize: { base: '15px', lg: '18px' },
      fontWeight: '700',
      lineHeight: 'normal',
      letterSpacing: { base: '1.071px', md: '1.286px' },
      textTransform: 'uppercase',
    },
    productPreviewDescription: {
      fontSize: '15px',
      fontWeight: '500',
      lineHeight: '25px',
      opacity: 0.5,
    },
    productPrice: {
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: 'normal',
      letterSpacing: '1.286px',
      textTransform: 'uppercase',
    },
    feature: {
      fontSize: '15px',
      fontWeight: '500',
      lineHeight: '25px',
      letterSpacing: 'normal',
      opacity: 0.5,
    },
    inTheBoxQuantity: {
      fontSize: '15px',
      fontWeight: '700',
      lineHeight: '25px',
      letterSpacing: 'normal',
    },
    recommend: {
      fontSize: '24px',
      fontWeight: '700',
      lineHeight: 'normal',
      letterSpacing: '1.714px',
      textTransform: 'uppercase',
    },
    navLinks: {
      fontSize: '13px',
      fontWeight: '700',
      lineHeight: '25px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    shopLink: {
      fontSize: '13px',
      fontWeight: '700',
      lineHeight: '25px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
    },
    cartPrice: {
      fontSize: '0.875rem',
      fontWeight: '700',
      lineHeight: '25px',
      letterSpacing: '1px',
    },
  },
};

export default textStyles;
