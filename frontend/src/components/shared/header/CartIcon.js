import { Icon } from '@chakra-ui/react';
import { ReactSVG } from 'react-svg';

const CartIcon = ({ cartIconUrl }) => {
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
