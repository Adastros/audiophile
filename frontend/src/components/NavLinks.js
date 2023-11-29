import { Flex, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

// Since this component is used in different sections, this
// component requires flex direction and gap props to properly
// display the links at different media query breakpoints for each
// section it is used in.
const NavLinks = ({ flexDir, gaps }) => {
  return (
    <Flex
      as="nav"
      id="nav-links"
      direction={flexDir}
      align="center"
      gap={gaps}
      color="white"
      textStyle="navLinks"
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

export default NavLinks;
