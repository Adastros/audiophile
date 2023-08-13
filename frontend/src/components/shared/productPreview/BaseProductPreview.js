import { VStack } from '@chakra-ui/react';
import ImagePreview from './ImagePreview';
import NewProduct from '../../shared/NewProduct';
import ProductName from './ProductName';
import ProductDescription from './ProductDescription';
import SeeProductButton from '../../shared/SeeProductButton';

const BaseProductPreview = ({ productPreviewData }) => {
  const productImgData = productPreviewData.image;
  const isProductNew = productPreviewData.new;
  const productName = productPreviewData.name;
  const productDescription = productPreviewData.description;
  const productDetailPageRoute = productPreviewData.route;

  return (
    <VStack textAlign="center">
      <ImagePreview productImgData={productImgData} />
      <VStack gap="24px">
        <NewProduct isNew={isProductNew} textVariant={'newProductDefault'} />
        <ProductName productName={productName} />
        <ProductDescription productDescription={productDescription} />
        <SeeProductButton
          buttonVariant="seeProductCaramel"
          buttonSize="designMd"
          route={productDetailPageRoute}
        />
      </VStack>
    </VStack>
  );
};

export default BaseProductPreview;
