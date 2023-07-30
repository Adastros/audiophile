import { extendTheme } from '@chakra-ui/react';
import colors from '../theme/colors';
import typography from './typography';
import textStyles from './textStyles';
import Button from './components/Button';
import Input from './components/Input';
import Text from './components/Text';
import Link from './components/Link';

const websiteTheme = extendTheme({
  ...colors,
  ...typography,
  ...textStyles,
  components: {
    Button,
    Input,
    Text,
    Link,
  },
});

export default websiteTheme;
