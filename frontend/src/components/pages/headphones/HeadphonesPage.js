import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Flex, VStack } from '@chakra-ui/react';
import Header from '../../shared/header/Header';
import ProductCategoryHeading from './ProductCategoryHeading';
import XX99MarkIIPreview from './XX99MarkIIPreview';
import XX99MarkIPreview from './XX99MarkIPreview';
import XX59Preview from './XX59ProductPreview';
import ProductCategories from '../../shared/productCategories/ProductCategories';
import Closing from '../../shared/closing/Closing';
import Footer from '../../shared/footer/Footer';
import MenuOverlay from '../../shared/header/MenuOverlay';
import MenuContext from '../../../utils/MenuContext';

const HeadphonesPage = () => {
  const headphonePageContent = useLoaderData();
  const menuOverlayStyles = useContext(MenuContext);
  const productCategory = headphonePageContent.productCategory;
  const XX99MarkIIProductData = headphonePageContent.products.primary;
  const XX99MarkIProductData = headphonePageContent.products.secondary;
  const XX59ProductData = headphonePageContent.products.tertiary;

  return (
    <Flex
      h="100%"
      w="100%"
      direction="column"
      align="center"
      position={menuOverlayStyles.pagePosition}
    >
      <Header />
      <ProductCategoryHeading productCategory={productCategory} />
      <VStack w="100%" gap="120px">
        <XX99MarkIIPreview productPreviewData={XX99MarkIIProductData} />
        <XX99MarkIPreview productPreviewData={XX99MarkIProductData} />
        <XX59Preview productPreviewData={XX59ProductData} />
        <ProductCategories />
        <Closing />
        <Footer />
      </VStack>
      <MenuOverlay displayCssValue={menuOverlayStyles.menuDisplay} />
    </Flex>
  );
};

export default HeadphonesPage;
