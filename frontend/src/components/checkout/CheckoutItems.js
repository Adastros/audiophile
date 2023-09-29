import { HStack, VStack } from '@chakra-ui/react';
import CartItemImage from '../shared/header/CartItemImage';
import CartItemName from '../shared/header/CartItemName';
import CartItemPrice from '../shared/header/CartItemPrice';
import CheckoutItemQuantity from './CheckoutItemQuantity';

const CheckoutItems = ({ productImage, displayName, price, quantity }) => {
  return (
    <HStack w="100%" gap="1rem">
      <CartItemImage productImage={productImage} />
      <VStack w="100%" align="flex-start" gap="0">
        <HStack w="100%" justify="space-between" gap="0">
          <CartItemName displayName={displayName} />
          <CheckoutItemQuantity quantity={quantity} />
        </HStack>
        <CartItemPrice price={price} />
      </VStack>
    </HStack>
  );
};

export default CheckoutItems;
