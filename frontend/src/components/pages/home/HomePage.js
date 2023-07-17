import { Box, Flex } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import Header from '../../shared/Header';
import Banner from './Banner';
import ProductCategories from '../../shared/ProductCategories';
import ProductCards from './ProductCards';
import Closing from '../../shared/Closing';
import Footer from '../../shared/Footer';

const HomePage = () => {
  const contentData = useLoaderData();

  return (
    <Flex direction="column">
      <Box bgColor="black">
        <Header />
        <Banner heroData={contentData.hero} />
      </Box>
      <Box>
        <ProductCategories />
      </Box>
      <Box>
        <ProductCards productCardData={contentData.productCards} />
      </Box>
      <Box>
        <Closing />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Flex>
  );
};

export default HomePage;
