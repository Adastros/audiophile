import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    borderRadius: "0"
  },
  sizes: {
    brandSm: {
      h: '18px',
      w: '57.3px',
      fontSize: '13px',
      flexShrink: '0',
    },
    brandMd: {
      h: '48px',
      w: '160px',
      fontSize: '13px',
      flexShrink: '0',
    },
  },
  variants: {
    seeProductCaramel: {
      color: '#FFFFFF',
      backgroundColor: '#D87D4A',
      border: 'none',
    },
    seeProductWhite: {
      color: '#000000',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#000000',
    },
    shop: {
      opacity: '0.5',
      border: 'none',
    },
  },
});

export default Button;
