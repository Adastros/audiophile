import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
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
  },
  variants: {
    seeProductCaramel: {
      color: 'brand.white',
      backgroundColor: 'brand.caramel',
      border: 'none',
      _hover: {
        backgroundColor: 'brand.atomicTangerine',
      },
    },
    seeProductWhite: {
      color: 'brand.black',
      backgroundColor: 'transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'brand.black',
      _hover: {
        color: 'brand.white',
        backgroundColor: 'brand.black',
        border: 'none',
      },
    },
    seeProductBlack: {
      color: 'brand.white',
      backgroundColor: 'brand.black',
      border: 'none',
      _hover: {
        backgroundColor: 'component.davyGrey',
      },
    },
    shop: {
      opacity: '0.5',
      border: 'none',
    },
  },
});

export default Button;
