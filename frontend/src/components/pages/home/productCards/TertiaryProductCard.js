import { Flex } from '@chakra-ui/react';
import TertiaryImageCard from './TertiaryImageCard';
import TertiaryLinkCard from './TertiaryLinkCard';

const TertiaryProductCards = ({ tertiaryCardData }) => {
  const imgData = tertiaryCardData.image;
  const productName = tertiaryCardData.product;
  const productDetailPageRoute = tertiaryCardData.route;

  return (
    <Flex
      id="tertiary-product-cards"
      direction="column"
      align="center"
      gap="24px"
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
