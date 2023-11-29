import { Text } from '@chakra-ui/react';

const About = ({ aboutText }) => {
  return (
    <Text
      w={{ base: '20.4375rem', md: '43.0625rem', lg: '33.75rem' }}
      textStyle="productPreviewDescription"
    >
      {aboutText}
    </Text>
  );
};

export default About;
