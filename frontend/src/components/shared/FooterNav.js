import { Flex, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

const FooterNav = () => {
  return (
    <Flex direction="column" align="center">
      <Link as={ReactRouterLink} to="/">
        Home
      </Link>
      <Link as={ReactRouterLink} to="/headphones">
        HEADPHONES
      </Link>
      <Link as={ReactRouterLink} to="/speakers">
        SPEAKERS
      </Link>
      <Link as={ReactRouterLink} to="/earphones">
        EARPHONES
      </Link>
    </Flex>
  );
};

export default FooterNav;
