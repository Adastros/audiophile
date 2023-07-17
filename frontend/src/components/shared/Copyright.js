import { Text } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';

const Copyright = () => {
  const footerData = useOutletContext()[2];
  const copyrightText = footerData.copyright;

  return <Text>{copyrightText}</Text>;
};

export default Copyright;
