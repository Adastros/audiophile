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
      h="15px"
      w="16px"
      minW="0"
      p="0"
      m="0"
      flexShrink="0"
    />
  );
};

export default MenuIconButton;
