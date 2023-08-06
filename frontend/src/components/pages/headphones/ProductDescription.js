import { Text } from '@chakra-ui/react';

const ProductDescription = ({ productDescription }) => {
  return (
    <Text
      w={{ base: '327px', md: '527px', lg: '445px' }}
      textStyle="productPreviewDescription"
    >
      {productDescription}
    </Text>
  );
};

export default ProductDescription;
