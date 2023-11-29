import { Text } from '@chakra-ui/react';

const Copyright = ({ copyrightText }) => {
  return (
    <Text opacity="0.5" textStyle="inTheBoxQuantity">
      {copyrightText}
    </Text>
  );
};

export default Copyright;
