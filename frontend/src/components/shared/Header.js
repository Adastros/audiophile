import { Flex } from '@chakra-ui/react';
import Navigation from './Navigation';
import CartIconButton from './CartIconButton';
import CompanyName from './CompanyName';

const Header = () => {
  return (
    <Flex align="center">
      <Flex>
        <Navigation />
        <CompanyName />
      </Flex>
      <CartIconButton />
    </Flex>
  );
};

export default Header;
