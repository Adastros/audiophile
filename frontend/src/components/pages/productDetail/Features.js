import { Box, Heading, Text } from '@chakra-ui/react';
import headingStyles from '../../../theme/headingStyles';

const Features = ({ featureText }) => {
  const paragraph1 = featureText.paragraph1;
  const paragraph2 = featureText.paragraph2;

  return (
    <Box w={{ base: '327px', md: '689px', lg: '635px' }}>
      <Heading
        as="h2"
        marginBottom="24px"
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
