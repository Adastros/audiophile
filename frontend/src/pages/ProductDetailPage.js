import { useState } from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import { Flex, VStack, Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import GoBackLink from '../components/GoBackLink';
import ImageDetail from '../components/productDetail/ImageDetail';
import NewProduct from '../components/NewProduct';
import ProductDetailName from '../components/productDetail/ProductDetailName';
import ProductDetailDescription from '../components/productDetail/ProductDetailDescription';
import ProductPrice from '../components/productDetail/ProductPrice';
import ProductQuantitySelection from '../components/productDetail/ProductQuantitySelection';
import Features from '../components/productDetail/Features';
import InTheBox from '../components/productDetail/InTheBox';
import Gallery from '../components/productDetail/Gallery';
import Recommendations from '../components/productDetail/Recommendations';
import ProductCategories from '../components/productCategories/ProductCategories';
import Closing from '../components/closing/Closing';

const ProductDetailBase = () => {
  const [quantity, setQuantity] = useState(1);
  const productDetails = useLoaderData();
  const closingData = useOutletContext().closingData;
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
      <Helmet>
        <title>{`audiophile | ${productName}`}</title>
      </Helmet>
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
            <GoBackLink />
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
                  <ProductQuantitySelection
                    cartKey={cartKey}
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
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
              setQuantity={setQuantity}
            />
            <ProductCategories />
          </VStack>
        </VStack>
      </VStack>
      <Closing closingData={closingData} />
    </>
  );
};

export default ProductDetailBase;
