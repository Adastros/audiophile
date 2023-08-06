import { Flex } from '@chakra-ui/react';
import PrimaryProductCards from './PrimaryProductCard';
import SecondaryProductCards from './SecondaryProductCard';
import TertiaryProductCards from './TertiaryProductCard';

const ProductCards = ({ productCardData }) => {
  return (
    <Flex
      id="homepage-product-cards"
      direction="column"
      align="center"
      gap="24px"
    >
      <PrimaryProductCards primaryCardData={productCardData.primary} />
      <SecondaryProductCards secondaryCardData={productCardData.secondary} />
      <TertiaryProductCards tertiaryCardData={productCardData.tertiary} />
    </Flex>
  );
};

export default ProductCards;
