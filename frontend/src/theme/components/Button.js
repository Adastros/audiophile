import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    borderRadius: '0',
  },
  sizes: {
    designSm: {
      h: '18px',
      w: '57.3px',
      fontSize: '13px',
      flexShrink: '0',
    },
    designMd: {
      h: '48px',
      w: '160px',
      fontSize: '13px',
      flexShrink: '0',
    },
    counterButton: {
      h: '48px',
      w: '40px',
      fontSize: '13px',
      flexShrink: '0',
    },
  },
  variants: {
    seeProductCaramel: {
      color: 'white',
      backgroundColor: 'brand.caramel',
      border: 'none',
      _hover: {
        backgroundColor: 'brand.atomicTangerine',
      },
    },
    seeProductWhite: {
      color: 'black',
      backgroundColor: 'transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'black',
      _hover: {
        color: 'white',
        backgroundColor: 'black',
        border: 'none',
      },
    },
    seeProductBlack: {
      color: 'white',
      backgroundColor: 'black',
      border: 'none',
      _hover: {
        backgroundColor: 'component.davyGrey',
      },
    },
    shop: {
      opacity: '0.5',
      border: 'none',
    },
    counterButton: {
      color: 'black',
      opacity: 0.25,
    },
  },
});

export default Button;
