import { Flex, VStack, Box, Heading, Text } from '@chakra-ui/react';
import Picture from '../Picture';
import SeeProductButton from '../SeeProductButton';
import headingStyles from '../../theme/headingStyles';

const PrimaryProductCards = ({ primaryCardData }) => {
  const imgData = primaryCardData.image;
  const backgroundDecorationUrl = primaryCardData.imageDecoration.circle.path;
  const productName = primaryCardData.product;
  const callToAction = primaryCardData.action;
  const productDetailPageRoute = primaryCardData.route;

  return (
    <Flex
      id="primary-product-card"
      h={{ base: '37.5rem', md: '45rem', lg: '35rem' }}
      w={{ base: '20.4375rem', md: '43.0625rem', lg: '100%' }}
      maxW="69.375rem"
      position="relative"
      direction={{ base: 'column', lg: 'row' }}
      align="center"
      color="white"
      overflow="hidden"
      textAlign={{ base: 'center', lg: 'left' }}
      borderRadius="0.5rem"
      backgroundImage={`url(${backgroundDecorationUrl})`}
      backgroundSize={{
        base: '34.875rem 34.875rem',
        md: '57.625rem 57.625rem',
        lg: '59.5rem 59.5rem',
      }}
      backgroundRepeat="no-repeat"
      backgroundPosition={{
        base: 'top -7.5rem center',
        md: 'top -16.75rem center',
        lg: 'bottom -22rem left -10.5rem',
      }}
      backgroundColor="brand.caramel"
    >
      <Box
        h={{ base: 'min-content', lg: '100%' }}
        w={{ base: 'min-content', lg: '59.5rem' }}
        position="relative"
      >
        <Box
          h="auto"
          w={{ base: '10.375rem', md: '12.3125rem', lg: '24rem' }}
          marginTop={{ base: '3.4375rem', md: '3.25rem', lg: '0' }}
          marginBottom={{ base: '2.5rem', md: '4rem', lg: '0' }}
          position={{ base: 'relative', lg: 'absolute' }}
          top={{ base: '0', lg: '6.75rem' }}
          right={{ base: '0', lg: '47.5%' }}
        >
          <Picture imgData={imgData} />
        </Box>
      </Box>
      <VStack
        position={{ base: 'relative', lg: 'absolute' }}
        top={{ base: '0', lg: '8.3125rem' }}
        left={{ base: '0', lg: '59%' }}
        align={{ base: 'center', lg: 'flex-start' }}
        gap="0"
      >
        <Heading
          as="h3"
          marginBottom={{ base: '1.6875rem', md: '1.5rem' }}
          whiteSpace="pre"
          {...headingStyles.lgHeading}
        >
          {productName}
        </Heading>
        <Text
          w={{ base: '17.5rem', md: '21.8125rem' }}
          paddingBottom={{ base: '1.5rem', md: '2.5rem' }}
          opacity="0.75"
          textStyle="productPreviewDescription"
        >
          {callToAction}
        </Text>
        <SeeProductButton
          buttonVariant="seeProductBlack"
          buttonSize="designMd"
          route={productDetailPageRoute}
        />
      </VStack>
    </Flex>
  );
};

export default PrimaryProductCards;
