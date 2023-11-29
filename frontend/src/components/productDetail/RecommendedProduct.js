import { VStack, Box, Text } from '@chakra-ui/react';
import Picture from '../Picture';
import SeeProductButton from '../SeeProductButton';

const RecommendedProduct = ({ product, route, setQuantity }) => {
  const name = product.name;
  const imgData = product.image;

  return (
    <>
      <VStack
        w={{ base: '20.4375rem', md: '13.9375rem', lg: '100%' }}
        gap="2rem"
      >
        <Box
          marginBottom={{ base: '0', md: '0.5rem' }}
          zIndex="1"
          borderRadius="0.5rem"
          backgroundColor="brand.antiFlashWhite"
        >
          <Picture imgData={imgData} />
        </Box>
        <Text textStyle="recommend">{name}</Text>
        <SeeProductButton
          buttonVariant="seeProductCaramel"
          buttonSize="designMd"
          route={route}
          setQuantity={setQuantity}
        />
      </VStack>
    </>
  );
};

export default RecommendedProduct;
