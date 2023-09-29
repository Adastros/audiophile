import { radioAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

// Radio control component border color does not change to desired
// color on hover properly if the 'border' shorthand CSS property is used.
// Using the long hand versions will make the border color change on hover
// correctly.
const checkout = definePartsStyle({
  control: {
    h: '1.25rem',
    w: '1.25rem',
    borderWidth: '0.0625rem',
    borderStyle: 'solid',
    borderColor: '#CFCFCF',
    backgroundColor: 'white',
    _hover: {
      borderColor: '#CFCFCF',
      backgroundColor: 'white',
    },
    _checked: {
      borderColor: '#CFCFCF',
      backgroundColor: 'white',
      _before: {
        h: '0.625rem',
        w: '0.625rem',
        background: '#D87D4A',
      },
      _hover: {
        borderColor: '#CFCFCF',
        backgroundColor: 'white',
        _before: {
          h: '0.625rem',
          w: '0.625rem',
          background: '#D87D4A',
        },
      },
    },
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: '700',
    lineHeight: 'normal',
    letterSpacing: '-0.25px',
  },
  container: {
    w: '100%',
    padding: '1.125rem 1rem',
    borderWidth: '0.0625rem',
    borderStyle: 'solid',
    borderColor: '#CFCFCF',
    borderRadius: '0.5rem',
    backgroundColor: 'white',
    _hover: {
      borderWidth: '0.0625rem',
      borderStyle: 'solid',
      borderColor: '#D87D4A',
    },
  },
});

export const radioTheme = defineMultiStyleConfig({
  variants: { checkout },
});
