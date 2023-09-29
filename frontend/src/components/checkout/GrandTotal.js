import { Flex, Text } from '@chakra-ui/react';

const GrandTotal = ({ grandTotal }) => {
  return (
    <Flex
      w="100%"
      marginTop="1rem"
      marginBottom="2rem"
      align="center"
      justify="space-between"
    >
      <Text textStyle="feature">GRAND TOTAL</Text>
      <Text
        color="brand.caramel"
        textStyle="productPrice"
      >{`$ ${grandTotal}`}</Text>
    </Flex>
  );
};

export default GrandTotal;
