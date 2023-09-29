import { Flex, Text } from '@chakra-ui/react';

const ShippingCost = () => {
  return (
    <Flex w="100%" align="center" justify="space-between">
      <Text textStyle="feature">SHIPPING</Text>
      <Text textStyle="productPrice">{`$ 50`}</Text>
    </Flex>
  );
};

export default ShippingCost;
