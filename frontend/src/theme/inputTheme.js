import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const checkout = definePartsStyle({
  field: {
    marginTop: '0.5625rem',
    fontSize: '0.875rem',
    fontWeight: '700',
    lineHeight: 'normal',
    letterSpacing: '-0.25px',
    border: '0.0625rem solid #CFCFCF',
    borderRadius: '0.5rem',
    _placeholder: {
      opacity: '0.4',
    },
    _invalid: {
      borderWidth: '0.125rem',
      borderColor: '#CD2C2C',
    },
    _focus: {
      borderColor: '#D87D4A',
    },
  },
});

export const inputTheme = defineMultiStyleConfig({
  variants: { checkout },
});
