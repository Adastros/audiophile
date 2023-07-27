import { Text } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';

const About = () => {
  const footerData = useOutletContext()[2];
  const aboutText = footerData.footer.about;

  return (
    <Text
      w="327px"
      fontSize="design.body"
      fontWeight="500"
      lineHeight="design.body"  
      textAlign="center"
    >
      {aboutText}
    </Text>
  );
};

export default About;
