import { Heading } from '@chakra-ui/react';
import headingStyles from '../../../../theme/headingStyles';

const Hero = ({ headline }) => {
  return (
    <Heading
      as="h1"
      w="min-content"
      paddingTop={{ base: '16px', md: '24px' }}
      paddingBottom="24px"
      textAlign={{ base: 'center', lg: 'left' }}
      whiteSpace="pre"
      {...headingStyles.lgHeading}
    >
      {headline}
    </Heading>
  );
};

export default Hero;
