import { Text } from '@chakra-ui/react';

const ThumbNailText = ({ text }) => {
  return (
    <Text
      zIndex="1"
      paddingBottom="18px"
      fontSize="design.body"
      fontWeight="bold"
      lineHeight="normal"
      letterSpacing="1.071px"
      textAlign="center"
      textTransform="uppercase"
    >
      {text}
    </Text>
  );
};

export default ThumbNailText;
