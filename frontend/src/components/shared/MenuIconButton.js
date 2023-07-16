import { IconButton } from '@chakra-ui/react';
import MenuIcon from './MenuIcon';
import { useOutletContext } from 'react-router-dom';

const MenuIconButton = () => {
  const headerData = useOutletContext()[0];
  const hamburgerIconAriaLabel = headerData.header.icon.hamburger.aria.label;
  
  return (
    <IconButton
      aria-label={hamburgerIconAriaLabel}
      icon={<MenuIcon />}
    />
  );
};

export default MenuIconButton;
