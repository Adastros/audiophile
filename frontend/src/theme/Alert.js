import { alertAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(alertAnatomy.keys);

const addToCartToast = definePartsStyle({
  container: {
    color: 'white',
    backgroundColor: '#D87D4A',
  },
  title: {
    color: 'white',
  },
  icon: {
    color: 'white',
  },
});

export const alertTheme = defineMultiStyleConfig({
  variants: { addToCartToast },
});
