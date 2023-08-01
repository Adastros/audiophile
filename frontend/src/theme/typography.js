import { theme as base } from '@chakra-ui/react';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/700.css';

const typography = {
  fonts: {
    heading: `Manrope, ${base.fonts.heading}`,
    body: `Manrope, ${base.fonts.body}`,
  },
  letterSpacings: {
    design: {
      h1: '2px',
      h2: '1.5px',
      h3: '1.15px',
      h4: '2px',
      h5: '1.7px',
      h6: '1.3px',
      overline: '10px',
      subtitle: '1px',
    },
  },
  lineHeights: {
    design: {
      h1: '58px',
      h2: '44px',
      h3: '36px',
      h4: '38px',
      h5: '33px',
      h6: '24px',
      body: '25px',
      overline: '19px',
      subtitle: '25px',
    },
  },
  fontSizes: {
    design: {
      h1: '56px',
      h2: '40px',
      h3: '32px',
      h4: '28px',
      h5: '24px',
      h6: '18px',
      body: '15px',
      overline: '14px',
      subtitle: '13px',
    },
  },
};

export default typography;
