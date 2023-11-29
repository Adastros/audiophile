import { Flex, Text } from '@chakra-ui/react';

const PriceTotal = ({ totalPrice = 0 }) => {
  return (
    <Flex w="100%" align="center" justify="space-between">
      <Text textStyle="feature">TOTAL</Text>
      <Text textStyle="productPrice">{`$ ${totalPrice}`}</Text>
    </Flex>
  );
};

export default PriceTotal;
