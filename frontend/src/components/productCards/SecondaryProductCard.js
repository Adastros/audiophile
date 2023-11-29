import { VStack, Box, Heading } from '@chakra-ui/react';
import SeeProductButton from '../SeeProductButton';
import headingStyles from '../../theme/headingStyles';

const SecondaryProductCards = ({ secondaryCardData }) => {
  const productName = secondaryCardData.product;
  const imageUrl = {
    desktop: secondaryCardData.image.desktop.path,
    tablet: secondaryCardData.image.tablet.path,
    mobile: secondaryCardData.image.mobile.path,
  };
  const productDetailPageRoute = secondaryCardData.route;

  return (
    <Box
      id="secondary-product-card"
      h="20rem"
      w={{ base: '20.4375rem', md: '43.0625rem', lg: '100%' }}
      maxW="69.375rem"
      borderRadius="0.5rem"
      backgroundImage={{
        base: `${imageUrl.mobile}`,
        md: `${imageUrl.tablet}`,
        lg: `${imageUrl.desktop}`,
      }}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundColor="brand.antiFlashWhite"
    >
      <VStack
        h="100%"
        w="100%"
        paddingLeft={{ base: '1.5rem', md: '3.875rem', lg: '4.5rem' }}
        align="flex-start"
        justify="center"
        gap="2rem"
      >
        <Heading as="h3" {...headingStyles.secondaryProduct}>
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
