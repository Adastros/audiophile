import { LinkBox, LinkOverlay, Image } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';
import { Link as ReactRouterLink } from 'react-router-dom';

const Logo = () => {
  const headerData = useOutletContext()[0];
  const logoImg = headerData.image.logo.path;
  const logoAlt = headerData.image.alt;
  const homeRoute = headerData.route.home;

  return (
    <LinkBox>
      <LinkOverlay as={ReactRouterLink} to={homeRoute}>
        <Image
          id="logo"
          src={logoImg}
          alt={logoAlt}
          h="25px"
          w="143px"
          flexShrink="0"
        />
      </LinkOverlay>
    </LinkBox>
  );
};

export default Logo;
