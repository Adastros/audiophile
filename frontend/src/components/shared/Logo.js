import { LinkBox, LinkOverlay, Image } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

const Logo = ({ logoData }) => {
  return (
    <LinkBox>
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
