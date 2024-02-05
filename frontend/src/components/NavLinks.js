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
      direction={flexDir}
      align="center"
      gap={gaps}
      color="white"
      textStyle="navLinks"
      data-cy="nav-links"
    >
      <Link as={ReactRouterLink} to="/">
        home
      </Link>
      <Link as={ReactRouterLink} to="/headphones">
        headphones
      </Link>
      <Link as={ReactRouterLink} to="/speakers">
        speakers
      </Link>
      <Link as={ReactRouterLink} to="/earphones">
        earphones
      </Link>
    </Flex>
  );
};

export default NavLinks;
