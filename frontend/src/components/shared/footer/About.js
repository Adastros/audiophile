import { Text } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';

const About = () => {
  const footerData = useOutletContext()[2];
  const aboutText = footerData.about;

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
