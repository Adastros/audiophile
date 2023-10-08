import { LinkBox, LinkOverlay, Image } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

const Logo = ({ logoData, menuModal }) => {
  const handleLogoClick = () => {
    if (menuModal) menuModal.onMenuModalClose();
  };

  return (
    <LinkBox onClick={handleLogoClick}>
      <LinkOverlay as={ReactRouterLink} to={logoData.homeRoute}>
        <Image
          id="logo"
          src={logoData.logoImg}
          alt={logoData.logoAlt}
          h="25px"
          w="143px"
          flexShrink="0"
        />
      </LinkOverlay>
    </LinkBox>
  );
};

export default Logo;
