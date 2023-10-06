import { extendTheme } from '@chakra-ui/react';
import colors from '../theme/colors';
import typography from './typography';
import textStyles from './textStyles';
import Button from './components/Button';
import Text from './components/Text';
import Link from './components/Link';
import FormLabel from './components/FormLabel';
import { accordionTheme } from './accordionTheme';
import { modalTheme } from './modalTheme';
import { inputTheme } from './inputTheme';
import { numberInputTheme } from './numberInputTheme';
import { radioTheme } from './radioThemes';
import { formErrorMessageTheme } from './formErrorMessageTheme';

const websiteTheme = extendTheme({
  ...colors,
  ...typography,
  ...textStyles,
  components: {
    Accordion: accordionTheme,
    Button,
    Input: inputTheme,
    NumberInput: numberInputTheme,
    Text,
    Link,
    Modal: modalTheme,
    FormLabel,
    FormError: formErrorMessageTheme,
    Radio: radioTheme,
  },
});

export default websiteTheme;
