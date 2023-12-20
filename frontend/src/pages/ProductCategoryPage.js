import { useLoaderData, useOutletContext } from 'react-router-dom';
import { VStack } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import ProductCategoryHeading from '../components/productCategories/ProductCategoryHeading';
import ProductCategories from '../components/productCategories/ProductCategories';
import BaseProductPreview from '../components/productPreview/BaseProductPreview';
import Closing from '../components/closing/Closing';

const ProductCategoryPage = () => {
  const headphonePageContent = useLoaderData();
  const closingData = useOutletContext().closingData;
  const productCategory = headphonePageContent.productCategory;
  const title =
    productCategory.charAt(0) + productCategory.slice(1).toLowerCase();
  const products = headphonePageContent.products;

  const productPreviews = () => {
    return Object.keys(products).map((product, i) => {
      let isEven = i % 2 === 0; // determines if a product preview is flexed row-reversed
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
      <Helmet>
        <title>{`audiophile | ${title}`}</title>
      </Helmet>
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
      <Closing closingData={closingData} />
    </>
  );
};

export default ProductCategoryPage;
