import { useLoaderData } from 'react-router-dom';
import { VStack } from '@chakra-ui/react';
import ProductCategoryHeading from '../productCategories/ProductCategoryHeading';
import ProductCategories from '../../shared/productCategories/ProductCategories';
import BaseProductPreview from '../productPreview/BaseProductPreview';

const BaseProductCategoryPage = () => {
  const headphonePageContent = useLoaderData();
  const productCategory = headphonePageContent.productCategory;
  const products = headphonePageContent.products;

  const productPreviews = () => {
    return Object.keys(products).map((product, i) => {
      let isEven = i % 2 === 0;   // determines if a product preview is flexed row-reversed
      let productKey = `${products[product].name
        .split(' ')
        .join('')}ProductPreview`;

      return (
        <BaseProductPreview
          key={`${productKey}`}
          product={products[product]}
          isEven={isEven}
        />
      );
    });
  };

  return (
    <>
      <ProductCategoryHeading productCategory={productCategory} />
      <VStack
        h="min-content"
        w="100%"
        paddingTop={{ base: '4rem', md: '7.5rem', lg: '10rem' }}
        paddingBottom={{ base: '7.5rem', lg: '10rem' }}
        paddingX={{ base: '1.5rem', md: '2.5rem' }}
        gap={{ base: '7.5rem', lg: '10rem' }}
      >
        {productPreviews()}
        <ProductCategories />
      </VStack>
    </>
  );
};

export default BaseProductCategoryPage;
