import { Flex, Text } from '@chakra-ui/react';

const VatCost = ({ vatCost }) => {
  return (
    <Flex w="100%" align="center" justify="space-between">
      <Text textStyle="feature">VAT (INCLUDED)</Text>
      <Text textStyle="productPrice">{`$ ${vatCost}`}</Text>
    </Flex>
  );
};

export default VatCost;
