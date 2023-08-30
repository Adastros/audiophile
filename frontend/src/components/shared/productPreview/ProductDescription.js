import { Text } from '@chakra-ui/react';

const ProductDescription = ({ productDescription }) => {
  return (
    <Text
      w={{ base: '20.4375rem', md: '35.75rem', lg: '27.8125rem' }}
      textStyle="productPreviewDescription"
    >
      {productDescription}
    </Text>
  );
};

export default ProductDescription;
