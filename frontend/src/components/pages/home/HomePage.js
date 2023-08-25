import { VStack, Flex, Box } from '@chakra-ui/react';
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
  const heroData = contentData.hero;
  const productCardData = contentData.productCards;
  const displayCssValue = menuOverlayStyles.menuDisplay;

  return (
    <Flex
      h="100%"
      w="100%"
      direction="column"
      position={menuOverlayStyles.pagePosition}
      backgroundColor="brand.seaSalt"
    >
      <Header />
      <Banner heroData={heroData} />
      <VStack
        h="min-content"
        w="100%"
        paddingTop={{ base: '2rem', md: '6rem' }}
        paddingBottom={{ base: '7.5rem', md: '6rem', lg: '10.5rem' }}
        paddingX={{ base: '1.5rem', md: '2.5rem', lg: '3rem' }}
        gap={{ base: '7.5rem', md: '6rem', lg: '10.5rem' }}
      >
        <Box
          w="100%"
          maxW={{ base: '100%', md: '43.0625rem', lg: '69.375rem' }}
        >
          <ProductCategories />
        </Box>
        <ProductCards productCardData={productCardData} />
        <Closing />
      </VStack>
      <Footer />
      <MenuOverlay displayCssValue={displayCssValue} />
    </Flex>
  );
};

export default HomePage;
