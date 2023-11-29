import { Flex } from '@chakra-ui/react';
import PrimaryProductCards from './PrimaryProductCard';
import SecondaryProductCards from './SecondaryProductCard';
import TertiaryProductCards from './TertiaryProductCard';

const ProductCards = ({ productCardData }) => {
  return (
    <Flex
      id="homepage-product-cards"
      h='min-content'
      w="100%"
      direction="column"
      align="center"
      gap={{ base: '1.5rem', md: '2rem' }}
    >
      <PrimaryProductCards primaryCardData={productCardData.primary} />
      <SecondaryProductCards secondaryCardData={productCardData.secondary} />
      <TertiaryProductCards tertiaryCardData={productCardData.tertiary} />
    </Flex>
  );
};

export default ProductCards;
