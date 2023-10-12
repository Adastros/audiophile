import { useSelector } from 'react-redux';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Flex,
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

  // Padding right is added when the modal body overflows to space the cart items from
  // the scrollbar.
  const modalBodyPadding = () => {
    const modalBody = document.querySelector('#modal-body');

    if (modalBody) {
      if (modalBody.scrollHeight > modalBody.offsetHeight) {
        return '1rem 0.75rem 1rem 0';
      }
    }
  };

  return (
    <Modal
      isOpen={isCartModalOpen}
      onClose={onCartModalClose}
      scrollBehavior="inside"
      variant="cart"
    >
      <ModalOverlay />
      <ModalContent>
        <Flex align="center" justify="space-between">
          <ModalHeader>{`CART (${totalCartItems})`}</ModalHeader>
          <ClearCart />
        </Flex>
        <ModalBody id="modal-body" padding={modalBodyPadding()}>
          {cartItems()}
        </ModalBody>
        <ModalFooter>
          <PriceTotal totalPrice={cartTotalPrice()} />
          <CheckoutButton
            buttonVariant="seeProductCaramel"
            buttonSize="checkout"
            totalCartItems={totalCartItems}
            route={route}
            onCartModalClose={onCartModalClose}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CartModal;
