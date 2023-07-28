import { Flex } from '@chakra-ui/react';
import TertiaryImageCard from './TertiaryImageCard';
import TertiaryLinkCard from './TertiaryLinkCard';

const TertiaryProductCards = ({ tertiaryCardData }) => {
  return (
    <Flex direction="column" align="center" gap="24px">
      <TertiaryImageCard tertiaryImgData={tertiaryCardData.image} />
      <TertiaryLinkCard productName={tertiaryCardData.product} />
    </Flex>
  );
};

export default TertiaryProductCards;
