import { useLoaderData } from 'react-router-dom';
import { VStack, HStack, Box } from '@chakra-ui/react';
import GoBackLink from './GoBackLink';
import ImageDetail from './ImageDetail';
import NewProduct from '../../shared/NewProduct';
import ProductDetailName from './ProductDetailName';
import ProductDetailDescription from './ProductDetailDescription';
import ProductPrice from './ProductPrice';
import QuantityCounter from './QuantityCounter';
import AddToCartButton from './AddToCartButton';
import Features from './Features';
import InTheBox from './InTheBox';
import Gallery from './Gallery';
import Recommendations from './Recommendations';
import ProductCategories from '../../shared/productCategories/ProductCategories';

const ProductDetailBase = () => {
  const productDetails = useLoaderData();
  const goBackUrl = productDetails.route.goBack;
  const productImgData = productDetails.productImage;
  const isNew = productDetails.new;
  const productName = productDetails.name;
  const productDescription = productDetails.description;
  const price = productDetails.price;
  const featureText = productDetails.feature;
  const items = productDetails.inTheBox;
  const galleryImages = productDetails.gallery;
  const recommendations = productDetails.recommendation;
  const routes = productDetails.route;

  return (
    <>
      <Box marginBottom="120px" paddingX="24px">
        <Box w={{ base: '327px' }} marginTop="16px" marginBottom="24px;">
          <GoBackLink goBackUrl={goBackUrl} />
        </Box>
        <VStack w="100%" gap="120px">
          <VStack gap="88px">
            <VStack gap="24px">
              <ImageDetail productImgData={productImgData} />
              <Box alignSelf="flex-start">
                <NewProduct isNew={isNew} textVariant="newProductDefault" />
              </Box>
              <ProductDetailName productName={productName} />
              <ProductDetailDescription
                productDescription={productDescription}
              />
              <ProductPrice price={price} />
              <HStack w="100%" gap="16px">
                <QuantityCounter />
                <AddToCartButton
                  buttonVariant="seeProductCaramel"
                  buttonSize="designMd"
                />
              </HStack>
            </VStack>
            <Features featureText={featureText} />
            <InTheBox items={items} />
            <Gallery galleryImages={galleryImages} />
          </VStack>
          <Recommendations recommendations={recommendations} routes={routes} />
          <ProductCategories />
        </VStack>
      </Box>
    </>
  );
};

export default ProductDetailBase;
