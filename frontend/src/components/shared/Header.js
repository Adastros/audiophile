import { Flex } from '@chakra-ui/react';
import Navigation from './Navigation';
import CartIconButton from './CartIconButton';
import Logo from './Logo';

const Header = () => {
  return (
    <Flex
      w="100%"
      align="center"
      justify="space-between"
      p="32px 39.61px"
      backgroundColor="brand.black"
      position="relative"
      top="0"
      left="0"
    >
      <Navigation />
      <Logo />
      <CartIconButton />
    </Flex>
  );
};

export default Header;
