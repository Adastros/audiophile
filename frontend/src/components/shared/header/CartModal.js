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

const CartModal = ({ isCartModalOpen, onCartModalClose, headerData }) => {
  const route = headerData.route.cart;
  const dummyInt = 3;
  const dummyTotalPrice = '1,000';
  const productName1 = 'XX99 Mark II';
  const productName2 = 'ZX9';
  const productName3 = 'YX1';
  const key1 = 'xx99mkii';
  const key2 = 'zx9';
  const key3 = 'yx1';

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
          <ModalHeader>{`CART (${dummyInt})`}</ModalHeader>
          <ClearCart />
        </Flex>
        <ModalBody id="modal-body">
          <CartItem
            productImage={headerData.image[key1]}
            productName={productName1}
            price={headerData.cart[key1].price}
            cartQuantity={1}
          />
          <CartItem
            productImage={headerData.image[key2]}
            productName={productName2}
            price={headerData.cart[key2].price}
            cartQuantity={2}
          />
          <CartItem
            productImage={headerData.image[key3]}
            productName={productName3}
            price={headerData.cart[key3].price}
            cartQuantity={3}
          />
        </ModalBody>
        <ModalFooter>
          <PriceTotal totalPrice={dummyTotalPrice} />
          <CheckoutButton
            buttonVariant="seeProductCaramel"
            buttonSize="checkout"
            route={route}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CartModal;
