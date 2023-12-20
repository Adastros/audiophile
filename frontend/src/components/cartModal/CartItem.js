import { useDispatch } from 'react-redux';
import { HStack, VStack } from '@chakra-ui/react';
import CartItemImage from './CartItemImage';
import CartItemName from './CartItemName';
import CartItemPrice from './CartItemPrice';
import QuantityCounter from '../QuantityCounter';
import {
  incrementQuantity,
  decrementQuantity,
} from '../../reducers/cartReducer';
import {
  increaseItemQuantity,
  decreaseItemQuantity,
} from '../../utils/requests';

const CartItem = ({
  cartItemKey,
  productImage,
  displayName,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();
  const cartImageSize = { height: '4rem', width: '4rem' };

  const handlePlusButtonClick = () => {
    const cartId = localStorage.getItem('cartId');

    increaseItemQuantity(cartId, cartItemKey, 1);

    dispatch(
      incrementQuantity({
        key: cartItemKey,
      })
    );
  };

  const handleMinusButtonClick = () => {
    const cartId = localStorage.getItem('cartId');

    decreaseItemQuantity(cartId, cartItemKey, 1);

    dispatch(
      decrementQuantity({
        key: cartItemKey,
      })
    );
  };

  return (
    <HStack h="4rem" w="100%" gap={{ base: '0.75rem', md: '1rem' }}>
      <CartItemImage productImage={productImage} size={cartImageSize} />
      <VStack flex="1" align="flex-start" gap="0">
        <CartItemName displayName={displayName} />
        <CartItemPrice price={price} />
      </VStack>
      <QuantityCounter
        isCart={true}
        quantity={quantity}
        handlePlusButtonClick={handlePlusButtonClick}
        handleMinusButtonClick={handleMinusButtonClick}
      />
    </HStack>
  );
};

export default CartItem;
