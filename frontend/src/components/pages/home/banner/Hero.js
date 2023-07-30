import { Heading } from '@chakra-ui/react';
import headingStyles from '../../../../theme/headingStyles';

const Hero = ({ headline }) => {
  return (
    <Heading
      as="h1"
      w="328px"
      paddingTop="16px"
      paddingBottom="24px"
      lineHeight={{ base: '40px', md: '58px' }}
      textAlign="center"
      {...headingStyles.lgHeading}
    >
      {headline}
    </Heading>
  );
};

export default Hero;
