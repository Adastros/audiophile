import { Box, Flex } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import Header from '../../shared/header/Header';
import Banner from './banner/Banner';
import ProductCategories from '../../shared/productCategories/ProductCategories';
import ProductCards from './productCards/ProductCards';
import Closing from '../../shared/closing/Closing';
import Footer from '../../shared/footer/Footer';

const HomePage = () => {
  const contentData = useLoaderData();

  return (
    <Flex direction="column" backgroundColor="design.seaSalt">
      <Box backgroundColor="black">
        <Header />
        <Box h="1px" w="100%" backgroundColor="white" opacity="0.104" />
        <Banner heroData={contentData.hero} />
      </Box>
      <ProductCategories />
      <ProductCards productCardData={contentData.productCards} />
      <Closing />
      <Footer />
    </Flex>
  );
};

export default HomePage;
