import { Text } from '@chakra-ui/react';

const ThumbNailText = ({ text }) => {
  return (
    <Text
      zIndex="1"
      paddingBottom="18px"
      textAlign="center"
      textStyle="thumbnailText"
    >
      {text}
    </Text>
  );
};

export default ThumbNailText;
