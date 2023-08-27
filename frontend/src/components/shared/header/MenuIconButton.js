import { IconButton } from '@chakra-ui/react';
import { useContext } from 'react';
import MenuIcon from './MenuIcon';
import HandlerContext from '../../../utils/HandlerContext';

const MenuIconButton = ({ headerData }) => {
  const handleMenuClick = useContext(HandlerContext).handleMenuClick;
  const hamburgerIconAriaLabel = headerData.icon.hamburger.aria.label;
  const hamburgerIconUrl = headerData.icon.hamburger.path;

  return (
    <IconButton
      id="menu-button"
      className="iconHover"
      aria-label={hamburgerIconAriaLabel}
      icon={<MenuIcon hamburgerIconUrl={hamburgerIconUrl} />}
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
