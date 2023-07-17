import { Text } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';

const About = () => {
  const footerData = useOutletContext()[2];
  const aboutText = footerData.footer.about;

  return <Text>{aboutText}</Text>;
};

export default About;
