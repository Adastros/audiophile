import { Text } from '@chakra-ui/react';

const ClearCart = () => {
  return (
    <Text
      textStyle="feature"
      textDecorationLine="underline"
      _hover={{ color: 'brand.caramel' }}
    >
      Remove All
    </Text>
  );
};

export default ClearCart;
