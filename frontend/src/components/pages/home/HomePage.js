import { VStack } from '@chakra-ui/react';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Banner from './banner/Banner';
import ProductCategories from '../../shared/productCategories/ProductCategories';
import ProductCards from './productCards/ProductCards';
import Closing from '../../shared/closing/Closing';

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
        <ProductCategories />
        <ProductCards productCardData={productCardData} />
      </VStack>
      <Closing closingData={closingData} />
    </>
  );
};

export default HomePage;
