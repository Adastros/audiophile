import { defineStyleConfig } from '@chakra-ui/react';

const Link = defineStyleConfig({
  baseStyle: {
    _hover: { color: 'brand.caramel', textDecoration: 'none' },
  },
});

export default Link;
