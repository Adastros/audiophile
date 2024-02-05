import { IconButton } from '@chakra-ui/react';
import MenuIcon from './MenuIcon';

const MenuIconButton = ({ headerData, menuModal }) => {
  const hamburgerIconAriaLabel = headerData.icon.hamburger.aria.label;
  const hamburgerIconUrl = headerData.icon.hamburger.path;

  const handleMenuClick = () => {
    if (menuModal.isMenuModalOpen) {
      menuModal.onMenuModalClose();
    } else {
      menuModal.onMenuModalOpen();
    }
  };

  return (
    <IconButton
      className="iconHover"
      aria-label={hamburgerIconAriaLabel}
      h="0.9375rem"
      w="1rem"
      minW="0"
      margin="0"
      padding="0"
      icon={<MenuIcon hamburgerIconUrl={hamburgerIconUrl} />}
      data-cy="menu-button"
      onClick={handleMenuClick}
    />
  );
};

export default MenuIconButton;
