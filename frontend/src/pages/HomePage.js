import { VStack, Flex } from '@chakra-ui/react';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Banner from '../components/banner/Banner';
import ProductCategories from '../components/productCategories/ProductCategories';
import ProductCards from '../components/productCards/ProductCards';
import Closing from '../components/closing/Closing';

const HomePage = () => {
  const contentData = useLoaderData();
  const closingData = useOutletContext().closingData;
  const heroData = contentData.hero;
  const productCardData = contentData.productCards;

  return (
    <>
      <Helmet>
        <title>audiophile | Home</title>
      </Helmet>
      <Banner heroData={heroData} />
      <VStack
        h="min-content"
        w="100%"
        paddingTop={{ base: '2rem', md: '6rem' }}
        paddingBottom={{ base: '7.5rem', md: '6rem', lg: '10.5rem' }}
        gap={{ base: '7.5rem', md: '6rem', lg: '10.5rem' }}
      >
        <Flex
          h="min-content"
          w="100%"
          justifyContent="center"
          paddingX={{ base: '1.5rem', md: '2.5rem' }}
        >
          <ProductCategories />
        </Flex>
        <ProductCards productCardData={productCardData} />
      </VStack>
      <Closing closingData={closingData} />
    </>
  );
};

export default HomePage;
