import { defineStyleConfig } from '@chakra-ui/react';

const Text = defineStyleConfig({
  variants: {
    newProductBanner: {
      fontSize: 'design.overline',
      fontWeight: 'normal',
      letterSpacing: 'design.overline',
      lineHeight: 'design.overline',
      textAlign: "center",
      textTransform: 'uppercase',
      color: 'brand.white',
      opacity: '0.496',
    },
  },
});

export default Text;
