import { Text } from '@chakra-ui/react';

const CartItemName = ({ displayName }) => {
  return <Text textStyle="inTheBoxQuantity">{displayName}</Text>;
};

export default CartItemName;
