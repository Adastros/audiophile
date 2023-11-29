import { Icon } from '@chakra-ui/react';
import { ReactSVG } from 'react-svg';

const MenuIcon = ({ hamburgerIconUrl }) => {
  return (
    <Icon
      as={ReactSVG}
      src={hamburgerIconUrl}
      h="100%"
      w="100%"
      backgroundColor="black"
    />
  );
};

export default MenuIcon;
