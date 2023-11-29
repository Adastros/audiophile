import { Text } from '@chakra-ui/react';

const ProductDetailDescription = ({ productDescription }) => {
  return (
    <Text
      w={{ base: '327px', md: '339px', lg: '445px' }}
      textStyle="productPreviewDescription"
    >
      {productDescription}
    </Text>
  );
};

export default ProductDetailDescription;
