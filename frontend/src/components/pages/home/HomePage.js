import { Box, Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../../shared/header/Header';
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
        <Box h="1px" w="100%" backgroundColor="white" opacity="0.104" />
        <Banner heroData={contentData.hero} />
      </Box>
      <ProductCategories />
      <ProductCards productCardData={contentData.productCards} />
      <Closing />
      <Footer />
      <MenuOverlay displayCssValue={menuOverlayStyles.menuDisplay} />
    </Flex>
  );
};

export default HomePage;
