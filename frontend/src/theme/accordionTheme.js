import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const orderConfirmation = definePartsStyle({
  container: {
    border: 'none',
  },
  button: {
    padding: '0',
    _hover: {
      background: 'none',
      color: 'brand.caramel',
    },
  },
  panel: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 0 0 0',
    gap: '1rem',
  },
});

export const accordionTheme = defineMultiStyleConfig({
  variants: { orderConfirmation },
});
