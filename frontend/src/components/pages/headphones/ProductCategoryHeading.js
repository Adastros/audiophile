import { Heading } from '@chakra-ui/react';
import headingStyles from '../../../theme/headingStyles';

const ProductCategoryHeading = ({ productCategory }) => {
  const productCatHeadingStyle = {
    ...headingStyles.mdHeading,
    letterSpacing: { base: '2px', md: '1.429px' },
  };

  return (
    <Heading
      as="h1"
      w="100%"
      paddingY="32px"
      color="white"
      backgroundColor="black"
      textAlign="center"
      {...productCatHeadingStyle}
    >
      {productCategory}
    </Heading>
  );
};

export default ProductCategoryHeading;
