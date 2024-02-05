import { Flex } from '@chakra-ui/react';
import TertiaryImageCard from './TertiaryImageCard';
import TertiaryLinkCard from './TertiaryLinkCard';

const TertiaryProductCards = ({ tertiaryCardData }) => {
  const imgData = tertiaryCardData.image;
  const productName = tertiaryCardData.product;
  const productDetailPageRoute = tertiaryCardData.route;

  return (
    <Flex
      w={{ base: '20.4375rem', md: '43.0625rem', lg: '100%' }}
      maxW="69.375rem"
      direction={{ base: 'column', md: 'row' }}
      align="center"
      gap={{ base: '2rem', md: '1rem', lg: '2rem' }}
      data-cy="tertiary-product-cards"
    >
      <TertiaryImageCard imgData={imgData} />
      <TertiaryLinkCard
        productName={productName}
        route={productDetailPageRoute}
      />
    </Flex>
  );
};

export default TertiaryProductCards;
