import { IconButton } from '@chakra-ui/react';
import CartIcon from './CartIcon';

const CartIconButton = ({ headerData, onCartModalOpen, menuModal }) => {
  const cartIconAriaLabel = headerData.icon.cart.aria.label;
  const cartIconUrl = headerData.icon.cart.path;

  const onCartClick = () => {
    if (menuModal) menuModal.onMenuModalClose();
    onCartModalOpen();
  };

  return (
    <IconButton
      id="cart-button"
      className="iconHover"
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
