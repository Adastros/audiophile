import { VStack } from '@chakra-ui/react';
import ProductCategoryHeading from '../productCategories/ProductCategoryHeading';
import ProductCategories from '../../shared/productCategories/ProductCategories';

const BaseProductCategoryPage = ({
  productCategory,
  productPreviewComponents,
}) => {
  return (
    <>
      <ProductCategoryHeading productCategory={productCategory} />
      <VStack
        h="min-content"
        w="100%"
        paddingTop={{ base: '2rem', md: '6rem' }}
        paddingBottom={{ base: '7.5rem', md: '6rem', lg: '10.5rem' }}
        paddingX={{ base: '1.5rem', md: '2.5rem', lg: '3rem' }}
        gap={{ base: '7.5rem', md: '6rem', lg: '10.5rem' }}
      >
        {productPreviewComponents}
        <ProductCategories />
      </VStack>
    </>
  );
};

export default BaseProductCategoryPage;
