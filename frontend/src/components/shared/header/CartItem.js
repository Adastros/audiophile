import { HStack, VStack } from '@chakra-ui/react';
import CartItemImage from './CartItemImage';
import CartItemName from './CartItemName';
import CartItemPrice from './CartItemPrice';
import QuantityCounter from '../QuantityCounter';

const CartItem = ({ productImage, productName, price, cartQuantity }) => {
  return (
    <HStack h="4rem" w="100%" gap="1rem">
      <CartItemImage productImage={productImage} />
      <VStack w="100%" align="flex-start" gap="0">
        <CartItemName productName={productName} />
        <CartItemPrice price={price} />
      </VStack>
      <QuantityCounter isCart={true} initialQuantity={cartQuantity} />
    </HStack>
  );
};

export default CartItem;
