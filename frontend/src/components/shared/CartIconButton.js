import { IconButton } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';
import CartIcon from './CartIcon';

const CartIconButton = () => {
  const headerData = useOutletContext()[0];
  const cartIconAriaLabel = headerData.header.icon.cart.aria.label;

  return <IconButton aria-label={cartIconAriaLabel} icon={<CartIcon />} />;
};

export default CartIconButton;
