import { Heading } from '@chakra-ui/react';
import headingStyles from '../../theme/headingStyles';

const ProductDetailName = ({ productName }) => {
  return (
    <Heading
      as="h2"
      w={{ base: '327px', md: '339px', lg: '445px' }}
      whiteSpace="pre"
      {...headingStyles.productDetailName}
    >
      {productName}
    </Heading>
  );
};

export default ProductDetailName;
