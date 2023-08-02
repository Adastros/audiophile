import { Flex } from '@chakra-ui/react';
import Navigation from './Navigation';
import CartIconButton from './CartIconButton';
import Logo from '../Logo';

const Header = () => {
  return (
    <Flex
      id="header"
      w="100%"
      p="32px 39.61px"
      position="relative"
      top="0"
      left="0"
      align="center"
      justify="space-between"
      backgroundColor="black"
    >
      <Navigation />
      <Logo />
      <CartIconButton />
    </Flex>
  );
};

export default Header;
