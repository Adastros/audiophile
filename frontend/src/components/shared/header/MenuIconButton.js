import { IconButton } from '@chakra-ui/react';
import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import MenuIcon from './MenuIcon';
import HandlerContext from '../../../utils/HandlerContext';

const MenuIconButton = () => {
  const headerData = useOutletContext()[0];
  const handleMenuClick = useContext(HandlerContext).handleMenuClick;
  const hamburgerIconAriaLabel = headerData.icon.hamburger.aria.label;

  return (
    <IconButton
      id="menu-button"
      className="iconHover"
      aria-label={hamburgerIconAriaLabel}
      icon={<MenuIcon />}
      h="15px"
      w="16px"
      minW="0"
      padding="0"
      margin="0"
      onClick={handleMenuClick}
    />
  );
};

export default MenuIconButton;
