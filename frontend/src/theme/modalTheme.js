import { modalAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import headingStyles from './headingStyles';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(modalAnatomy.keys);

const menu = definePartsStyle({
  overlay: { top: '5.5625rem', overflow: 'hidden', opacity: '0.4' },
  dialogContainer: {
    w: '100%',
    top: '5.5625rem',
    margin: '0',
    padding: '0',
  },
  dialog: {
    maxW: '100%',
    w: '100%',
    margin: '0',
    padding: '0',
    borderRadius: { base: '0 0 0.5rem 0.5rem' },
    backgroundColor: 'white',
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: { base: '1rem', md: '3rem' },
    paddingBottom: { base: '2.25rem', md: '4.1875rem' },
    paddingX: { base: '0', md: '2.5rem' },
  },
});

const cart = definePartsStyle({
  header: { paddingX: '0', whiteSpace: 'nowrap', ...headingStyles.cart },
  overlay: { overflow: 'hidden' },
  dialogContainer: {
    paddingX: { base: '0', md: '3.4375rem', lg: '3.9375rem' },
  },
  dialog: {
    maxH: '100%',
    maxW: { base: '21.5rem', md: '100%', lg: '69.375rem' },
    h: '100%',
    w: '100%',
    alignItems: 'flex-end',
    outline: 'none',
    outlineOffset: 'none',
    margin: '0',
    boxShadow: 'none',
    background: 'none',
  },
  body: {
    marginY: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '0',
  },
  footer: {
    w: '100%',
    paddingX: '0',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
});

const orderConfirmation = definePartsStyle({
  header: {
    alignSelf: 'flex-start',
    padding: '0',
    whiteSpace: 'pre',
    ...headingStyles.orderConfirmation,
  },
  overlay: { overflow: 'hidden' },
  dialogContainer: {
    paddingY: '2rem',
  },
  dialog: {
    w: { base: '20.4375rem', md: '33.75rem' },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: { base: 'border-box', md: 'content-box' },
    padding: { base: '2rem', md: '3rem' },
    borderRadius: '0.5rem',
  },
  body: {
    h: 'min-content',
    w: { base: '100%', md: '27.75rem' },
    paddingTop: { base: '1rem', md: '1.5rem' },
    paddingBottom: { base: '1.5rem', md: '2.875rem', lg: '3rem' },
    paddingX: '0',
  },
  footer: {
    w: '100%',
    paddingX: '0',
  },
});

export const modalTheme = defineMultiStyleConfig({
  variants: { menu, cart, orderConfirmation },
});
