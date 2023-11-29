import { Flex, VStack } from '@chakra-ui/react';
import ImagePreview from './ImagePreview';
import NewProduct from '../NewProduct';
import ProductName from './ProductName';
import ProductDescription from './ProductDescription';
import SeeProductButton from '../SeeProductButton';

const BaseProductPreview = ({ product, isEven }) => {
  const productImgData = product.image;
  const isProductNew = product.new;
  const productName = product.name;
  const productDescription = product.description;
  const productDetailPageRoute = product.route;
  const flexDirection = isEven ? 'row' : 'row-reverse';

  return (
    <Flex
      w={{ base: '20.4375rem', md: '40.0625rem', lg: '100%' }}
      maxW="69.375rem"
      direction={{ base: 'column', lg: flexDirection }}
      align="center"
      justify={{ base: 'center', lg: 'space-between' }}
      gap={{ base: '2rem', md: '3.25rem', lg: '7.8125rem' }}
    >
      <ImagePreview productImgData={productImgData} />
      <VStack
        align={{ base: 'center', lg: 'flex-start' }}
        gap="1.5rem"
        textAlign={{ base: 'center', lg: 'left' }}
      >
        <NewProduct isNew={isProductNew} textVariant={'newProductDefault'} />
        <ProductName productName={productName} />
        <ProductDescription productDescription={productDescription} />
        <SeeProductButton
          buttonVariant="seeProductCaramel"
          buttonSize="designMd"
          route={productDetailPageRoute}
        />
      </VStack>
    </Flex>
  );
};

export default BaseProductPreview;
