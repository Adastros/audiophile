import { IconButton } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';
import CartIcon from './CartIcon';

const CartIconButton = () => {
  const headerData = useOutletContext()[0];
  const cartIconAriaLabel = headerData.header.icon.cart.aria.label;

  return (
    <IconButton
      aria-label={cartIconAriaLabel}
      icon={<CartIcon />}
      h="20px"
      w="23px"
      minW="0"
      p="0"
      m="0"
      flexShrink="0"
    />
  );
};

export default CartIconButton;
