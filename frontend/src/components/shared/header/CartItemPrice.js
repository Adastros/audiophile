import { Text } from '@chakra-ui/react';

const CartItemPrice = ({ price }) => {
  return (
    <Text opacity="0.5" textStyle="cartPrice">
      {`$ ${price}`}
    </Text>
  );
};

export default CartItemPrice;
