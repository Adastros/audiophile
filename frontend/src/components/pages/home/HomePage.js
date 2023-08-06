import { VStack, Box, Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../../shared/header/Header';
import LineBreak from '../../shared/LineBreak';
import Banner from './banner/Banner';
import ProductCategories from '../../shared/productCategories/ProductCategories';
import ProductCards from './productCards/ProductCards';
import Closing from '../../shared/closing/Closing';
import Footer from '../../shared/footer/Footer';
import MenuOverlay from '../../shared/header/MenuOverlay';
import MenuContext from '../../../utils/MenuContext';

const HomePage = () => {
  const contentData = useLoaderData();
  const menuOverlayStyles = useContext(MenuContext);

  return (
    <Flex
      h="100%"
      w="100%"
      direction="column"
      position={menuOverlayStyles.pagePosition}
      backgroundColor="brand.seaSalt"
    >
      <Box backgroundColor="black">
        <Header />
        <LineBreak />
        <Banner heroData={contentData.hero} />
      </Box>
      <VStack w="100%" paddingTop="32px" gap="120px">
        <ProductCategories />
        <ProductCards productCardData={contentData.productCards} />
        <Closing />
        <Footer />
      </VStack>
      <MenuOverlay displayCssValue={menuOverlayStyles.menuDisplay} />
    </Flex>
  );
};

export default HomePage;
