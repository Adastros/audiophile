import { Flex, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

const FooterNav = () => {
  return (
    <Flex
      direction="column"
      align="center"
      gap="16px"
      fontSize="design.subtitle"
      fontWeight="bold"
      lineHeight="design.body"
      letterSpacing="design.h1"
      textTransform="uppercase"
    >
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
