import { defineStyleConfig } from '@chakra-ui/react';

const Input = defineStyleConfig({
  baseStyle: {
    padding: '18px 174px 19px 24px',
    fontWeight: 'bold',
    letterSpacing: '-0.25px',
    border: '1px solid #CFCFCF',
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    opacity: '0.4;',
  },
  sizes: {
    brandMd: {
      h: '56px',
      w: '309px',
      fontSize: '14px',
      flexShrink: '0',
    },
  },
});

export default Input;
