import { VStack } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import Banner from './banner/Banner';
import ProductCategories from '../../shared/productCategories/ProductCategories';
import ProductCards from './productCards/ProductCards';

const HomePage = () => {
  const contentData = useLoaderData();
  const heroData = contentData.hero;
  const productCardData = contentData.productCards;

  return (
    <>
      <Banner heroData={heroData} />
      <VStack
        h="min-content"
        w="100%"
        paddingTop={{ base: '2rem', md: '6rem' }}
        paddingBottom={{ base: '7.5rem', md: '6rem', lg: '10.5rem' }}
        paddingX={{ base: '1.5rem', md: '2.5rem', lg: '3rem' }}
        gap={{ base: '7.5rem', md: '6rem', lg: '10.5rem' }}
      >
        <ProductCategories />
        <ProductCards productCardData={productCardData} />
      </VStack>
    </>
  );
};

export default HomePage;
