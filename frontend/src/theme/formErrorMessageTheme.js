import { formErrorAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(formErrorAnatomy.keys);

const checkout = definePartsStyle({
  text: {
    marginTop: '0',
    fontSize: '0.75rem',
    color: '#CD2C2C',
    fontWeight: '500',
    lineHeight: 'normal',
    letterSpacing: '-0.214px',
  },
});

export const formErrorMessageTheme = defineMultiStyleConfig({
  variants: { checkout },
});
