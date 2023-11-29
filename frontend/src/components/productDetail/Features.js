import { Box, Heading, Text } from '@chakra-ui/react';
import headingStyles from '../../theme/headingStyles';

const Features = ({ featureText }) => {
  const paragraph1 = featureText.paragraph1;
  const paragraph2 = featureText.paragraph2;

  return (
    <Box w={{ base: '20.4375rem', md: '43.0625rem', lg: '100%' }}>
      <Heading
        as="h2"
        marginBottom={{ base: '1.5rem', md: '2rem' }}
        {...headingStyles.productDetailSection}
      >
        FEATURES
      </Heading>
      <Text textStyle="feature">{paragraph1}</Text>
      <br />
      <Text textStyle="feature">{paragraph2}</Text>
    </Box>
  );
};

export default Features;
