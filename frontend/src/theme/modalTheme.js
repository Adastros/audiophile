import { modalAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import headingStyles from './headingStyles';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(modalAnatomy.keys);

const cart = definePartsStyle({
  header: { paddingX: '0', whiteSpace: 'nowrap', ...headingStyles.cart },
  overlay: { overflow: 'hidden' },
  dialogContainer: {
    justifyContent: { base: 'center', md: 'flex-end' },
  },
  dialog: {
    maxH: '30.625rem',
    w: { base: '20.4375rem', md: '23.5625rem' },
    marginTop: '7.2rem',
    marginRight: { base: '0', md: '3rem', lg: '5.2%' },
    padding: '1rem 1.75rem',
    borderRadius: '0.5rem'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1rem 0',
  },
  footer: {
    w: '100%',
    paddingX: '0',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
});

export const modalTheme = defineMultiStyleConfig({
  variants: { cart },
});
