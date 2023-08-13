import { VStack, Box, Heading } from '@chakra-ui/react';
import SeeProductButton from '../../../shared/SeeProductButton';

const SecondaryProductCards = ({ secondaryCardData }) => {
  const productName = secondaryCardData.product;
  const imageUrl = secondaryCardData.image.mobile.path;
  const productDetailPageRoute = secondaryCardData.route;

  return (
    <Box
      id="secondary-product-card"
      h="320px"
      w="327px"
      borderRadius="8px"
      backgroundImage={imageUrl}
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      backgroundPosition="top"
      backgroundColor="brand.antiFlashWhite"
    >
      <VStack
        h="100%"
        w="100%"
        paddingLeft="24px"
        align="flex-start"
        justify="center"
        gap="32px"
      >
        <Heading
          as="h3"
          fontSize="design.h4"
          fontWeight="bold"
          lineHeight="normal"
          letterSpacing="design.h1"
          textTransform="uppercase"
        >
          {productName}
        </Heading>
        <SeeProductButton
          buttonVariant="seeProductWhite"
          buttonSize="designMd"
          route={productDetailPageRoute}
        />
      </VStack>
    </Box>
  );
};

export default SecondaryProductCards;
