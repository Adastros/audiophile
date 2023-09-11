import { Text } from '@chakra-ui/react';

const CartItemName = ({ productName }) => {
  return <Text textStyle="inTheBoxQuantity">{productName}</Text>;
};

export default CartItemName;
