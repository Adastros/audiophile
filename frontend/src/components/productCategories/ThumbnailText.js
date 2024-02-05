import { Text } from '@chakra-ui/react';

const ThumbNailText = ({ text }) => {
  return (
    <Text
      zIndex="1"
      paddingBottom="18px"
      textAlign="center"
      textStyle="thumbnailText"
      textTransform="uppercase"
      data-cy="product-category-thumbnail-text"
    >
      {text}
    </Text>
  );
};

export default ThumbNailText;
