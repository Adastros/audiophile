import { Icon } from '@chakra-ui/react';
import { ReactSVG } from 'react-svg';
import { useOutletContext } from 'react-router-dom';

const MenuIcon = () => {
  const headerData = useOutletContext()[0];
  const hamburgerIconUrl = headerData.header.icon.hamburger.path;

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
