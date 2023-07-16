import { VStack, Box, Heading } from '@chakra-ui/react';
import SeeProductButton from '../../shared/SeeProductButton';

const SecondaryProductCards = ({ secondaryCardData }) => {
  const productName = secondaryCardData.product;
  const imageUrl = secondaryCardData.image.mobile.path;

  return (
    <Box
      w="100%"
      backgroundImage={imageUrl}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
    >
      <VStack justify="flex-start">
        <Heading as="h3">{productName}</Heading>
        <SeeProductButton />
      </VStack>
    </Box>
  );
};

export default SecondaryProductCards;
