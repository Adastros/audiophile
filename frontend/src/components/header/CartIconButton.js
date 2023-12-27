import { IconButton } from '@chakra-ui/react';
import CartIcon from './CartIcon';
import { awaitModalBody, padModalBody } from '../../utils/helper';

const CartIconButton = ({ headerData, onCartModalOpen, menuModal }) => {
  const cartIconAriaLabel = headerData.icon.cart.aria.label;
  const cartIconUrl = headerData.icon.cart.path;

  const onCartClick = async () => {
    if (menuModal) menuModal.onMenuModalClose();

    onCartModalOpen();

    // Padding right is added when the content of modal body overflows
    // to space the cart items from the scrollbar.
    const modalBody = await awaitModalBody();
    padModalBody(modalBody);
  };

  return (
    <IconButton
      id="cart-button"
      aria-label={cartIconAriaLabel}
      icon={<CartIcon cartIconUrl={cartIconUrl} />}
      onClick={onCartClick}
      h="1.25rem"
      w="1.4375rem"
      minW="0"
      margin="0"
      padding="0"
    />
  );
};

export default CartIconButton;
