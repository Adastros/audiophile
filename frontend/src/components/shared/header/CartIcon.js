import { Icon } from '@chakra-ui/react';
import { ReactSVG } from 'react-svg';
import { useOutletContext } from 'react-router-dom';

const CartIcon = () => {
  const headerData = useOutletContext()[0];
  const cartIconUrl = headerData.icon.cart.path;

  return (
    <Icon
      as={ReactSVG}
      src={cartIconUrl}
      h="100%"
      w="100%"
      backgroundColor="black"
    />
  );
};

export default CartIcon;
