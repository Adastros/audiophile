import { Flex } from '@chakra-ui/react';
import Navigation from './Navigation';
import CartIconButton from './CartIconButton';
import Logo from './Logo';

const Header = () => {
  return (
    <Flex align="center" justify="space-between" p="32px 39.61px">
      <Navigation />
      <Logo />
      <CartIconButton />
    </Flex>
  );
};

export default Header;
