import { Text } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';

const Copyright = () => {
  const footerData = useOutletContext()[2];
  const copyrightText = footerData.footer.copyright;

  return (
    <Text
      fontSize="design.body"
      fontWeight="bold"
      lineHeight="design.body"
      opacity="0.5"
    >
      {copyrightText}
    </Text>
  );
};

export default Copyright;
