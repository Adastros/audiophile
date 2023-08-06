import { useContext } from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import Header from '../../shared/header/Header';
import ProductCategories from '../../shared/productCategories/ProductCategories';
import Closing from '../../shared/closing/Closing';
import Footer from '../../shared/footer/Footer';
import MenuOverlay from '../../shared/header/MenuOverlay';
import MenuContext from '../../../utils/MenuContext';

const BaseProductCategoryPage = ({
  productCategoryHeading,
  productPreviewComponents,
}) => {
  const menuOverlayStyles = useContext(MenuContext);

  return (
    <Flex
      h="100%"
      w="100%"
      direction="column"
      align="center"
      position={menuOverlayStyles.pagePosition}
    >
      <Header />
      {productCategoryHeading}
      <VStack w="100%" paddingTop="64px" gap="120px">
        {productPreviewComponents}
        <ProductCategories />
        <Closing />
        <Footer />
      </VStack>
      <MenuOverlay displayCssValue={menuOverlayStyles.menuDisplay} />
    </Flex>
  );
};

export default BaseProductCategoryPage;
