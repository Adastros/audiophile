import { useLoaderData } from 'react-router-dom';
import { Flex, VStack, Box } from '@chakra-ui/react';
import GoBackLink from './GoBackLink';
import ImageDetail from './ImageDetail';
import NewProduct from '../../shared/NewProduct';
import ProductDetailName from './ProductDetailName';
import ProductDetailDescription from './ProductDetailDescription';
import ProductPrice from './ProductPrice';
import ProductQuantitySelection from './ProductQuantitySelection';
import Features from './Features';
import InTheBox from './InTheBox';
import Gallery from './Gallery';
import Recommendations from './Recommendations';
import ProductCategories from '../../shared/productCategories/ProductCategories';

const ProductDetailBase = () => {
  const productDetails = useLoaderData();
  const goBackUrl = productDetails.route.goBack;
  const imgData = productDetails.productImage;
  const isNew = productDetails.new;
  const productName = productDetails.name;
  const productDescription = productDetails.description;
  const price = productDetails.price;
  const featureText = productDetails.feature;
  const items = productDetails.inTheBox;
  const galleryImages = productDetails.gallery;
  const recommendations = productDetails.recommendation;
  const routes = productDetails.route;
  const cartKey = productDetails.cartKey;

  return (
    <>
      <VStack
        w="100%"
        marginBottom={{ base: '7.5rem', lg: '10.5rem' }}
        paddingX={{ base: '1.5rem', md: '2.5rem' }}
      >
        <VStack
          w={{ base: '20.4375rem', md: '43.0625rem', lg: '100%' }}
          maxW="69.375rem"
          gap="0"
        >
          <Box
            marginTop={{ base: '1rem', md: '2rem', lg: '5rem' }}
            marginBottom={{ base: '1.5rem', lg: '3.5rem' }}
            alignSelf="flex-start"
          >
            <GoBackLink goBackUrl={goBackUrl} />
          </Box>
          <VStack w="100%" gap={{ base: '7.5rem', lg: '10rem' }}>
            <VStack
              w="100%"
              gap={{ base: '5.5rem', md: '7.5rem', lg: '10rem' }}
            >
              <Flex
                w="100%"
                direction={{ base: 'column', md: 'row' }}
                align="center"
                gap={{ base: '1.5rem', md: '4.375rem', lg: '7.8125rem' }}
              >
                <ImageDetail imgData={imgData} />
                <VStack align="flex-start" gap={{ base: '1.5rem', md: '2rem' }}>
                  <Box marginBottom={{ base: '0', md: '-1rem' }}>
                    <NewProduct isNew={isNew} textVariant="newProductDefault" />
                  </Box>
                  <ProductDetailName productName={productName} />
                  <ProductDetailDescription
                    productDescription={productDescription}
                  />
                  <ProductPrice price={price} />
                  <ProductQuantitySelection cartKey={cartKey} />
                </VStack>
              </Flex>
              <Flex
                direction={{ base: 'column', lg: 'row' }}
                align={{ base: 'center', md: 'flex-start' }}
                gap={{ base: '5.5rem', md: '7.5rem', lg: '7.8125rem' }}
              >
                <Features featureText={featureText} />
                <InTheBox items={items} />
              </Flex>
              <Gallery galleryImages={galleryImages} />
            </VStack>
            <Recommendations
              recommendations={recommendations}
              routes={routes}
            />
            <ProductCategories />
          </VStack>
        </VStack>
      </VStack>
    </>
  );
};

export default ProductDetailBase;
