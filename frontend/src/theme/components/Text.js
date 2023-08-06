import { defineStyleConfig } from '@chakra-ui/react';

const Text = defineStyleConfig({
  variants: {
    newProductBanner: {
      fontSize: 'design.overline',
      fontWeight: '400',
      letterSpacing: 'design.overline',
      lineHeight: 'normal',
      textAlign: 'center',
      textTransform: 'uppercase',
      color: 'white',
      opacity: '0.496',
    },
    newProductDefault: {
      fontSize: 'design.overline',
      fontWeight: '400',
      letterSpacing: 'design.overline',
      lineHeight: 'normal',
      textAlign: 'center',
      textTransform: 'uppercase',
      color: 'brand.caramel',
    },
  },
});

export default Text;
