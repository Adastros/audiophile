import { extendTheme, theme as base } from '@chakra-ui/react';
import colors from '../theme/colors';
import typography from './typography';
import Button from './components/Button';
import Input from './components/Input';

const websiteTheme = extendTheme({
  ...colors,
  ...typography,
  components: {
    Button,
    Input,
  },
});

export default websiteTheme;
