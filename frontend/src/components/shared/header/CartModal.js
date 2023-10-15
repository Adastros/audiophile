import { useSelector } from 'react-redux';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Flex,
  Box,
} from '@chakra-ui/react';
import ClearCart from './ClearCart';
import CartItem from './CartItem';
import PriceTotal from './PriceTotal';
import CheckoutButton from './CheckoutButton';

const CartModal = ({ headerData, isCartModalOpen, onCartModalClose }) => {
  const cart = useSelector(state => state.cart);
  const route = headerData.route.cart;
  const totalCartItems = Object.values(cart).reduce((a, b) => a + b, 0);

  const cartItems = () => {
    return Object.keys(cart).map(cartItemKey => {
      let quantity = cart[cartItemKey];

      if (quantity) {
        const productImage = headerData.image[cartItemKey];
        const productPrice = headerData.cart[cartItemKey].price;
        const displayName = headerData.cart[cartItemKey].displayName;

        return (
          <CartItem
            key={`${cartItemKey}CartItem`}
            cartItemKey={cartItemKey}
            productImage={productImage}
            displayName={displayName}
            price={productPrice}
            quantity={quantity}
          />
        );
      }
    });
  };

  const cartTotalPrice = () => {
    const totalPrice = Object.entries(cart).reduce((sum, cartItem) => {
      const cartItemKey = cartItem[0];
      const cartItemQuantity = cartItem[1];

      if (cartItemQuantity) {
        const productPrice = headerData.cart[cartItemKey].price;

        sum += cartItemQuantity * productPrice;
      }

      return sum;
    }, 0);

    return totalPrice.toLocaleString();
  };

  // Prevents events from bubbling (moving up to parent containers)
  // to <ModalContent> and causing onCartModalClose to execute.
  const onModalContentChildClick = e => {
    e.stopPropagation();
  };

  return (
    <Modal
      isOpen={isCartModalOpen}
      onClose={onCartModalClose}
      scrollBehavior="inside"
      variant="cart"
    >
      <ModalOverlay />
      <ModalContent onClick={onCartModalClose}>
        <Box
          maxH="30.5rem"
          w={{ base: '20.4375rem', md: '23.5625rem' }}
          marginTop="7.2rem"
          padding={{
            base: '1rem 1.75rem 1rem 1.75rem',
            md: '1rem 2rem 1rem 2rem',
          }}
          borderRadius="0.5rem"
          backgroundColor="white"
          overflow="hidden"
          onClick={onModalContentChildClick}
        >
          <Flex
            align="center"
            justify="space-between"
            onClick={onModalContentChildClick}
          >
            <ModalHeader>{`CART (${totalCartItems})`}</ModalHeader>
            <ClearCart />
          </Flex>
          <ModalBody id="modal-body" onClick={onModalContentChildClick}>
            {cartItems()}
          </ModalBody>
          <ModalFooter onClick={onModalContentChildClick}>
            <PriceTotal totalPrice={cartTotalPrice()} />
            <CheckoutButton
              buttonVariant="seeProductCaramel"
              buttonSize="checkout"
              totalCartItems={totalCartItems}
              route={route}
              onCartModalClose={onCartModalClose}
            />
          </ModalFooter>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default CartModal;
