import { HStack, VStack } from '@chakra-ui/react';
import CartItemImage from '../cartModal/CartItemImage';
import CartItemName from '../cartModal/CartItemName';
import CartItemPrice from '../cartModal/CartItemPrice';
import CheckoutItemQuantity from './CheckoutItemQuantity';

const CheckoutItems = ({
  productImage,
  displayName,
  price,
  quantity,
  itemImageSize,
}) => {
  return (
    <HStack w="100%" gap="1rem">
      <CartItemImage productImage={productImage} size={itemImageSize} />
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
