import { Flex, Box } from '@chakra-ui/react';
import Navigation from './Navigation';
import CartIconButton from './CartIconButton';
import Logo from '../Logo';

const Header = ({ headerData, logoData, onCartModalOpen }) => {
  return (
    <Flex
      id="header"
      w="100% "
      paddingX={{ base: '0', md: '2.5rem', lg: '3rem' }}
      zIndex="1"
      position="relative"
      align="center"
      justify="center"
      backgroundColor="black"
      overflowX={'hidden'}
    >
      <Flex
        w="100%"
        maxW="69.375rem"
        paddingX={{ base: '2.5rem', md: '0px' }}
        paddingY="32px"
        position="relative"
        align="center"
        justify="space-between"
        backgroundColor="black"
        borderBottom={'1px solid rgba(255, 255, 255, 0.2)'}
      >
        <Flex
          h="30px"
          w="150px"
          align="center"
          justify="center"
          position={{ base: 'absolute', lg: 'relative' }}
          top={{ base: 'calc(50% - 15px)', lg: '0' }}
          left={{ base: 'calc(50% - 75px)', md: '3.75rem', lg: '0' }}
        >
          <Logo logoData={logoData} />
        </Flex>
        <Box
          position={{ base: 'relative', lg: 'absolute' }}
          top={{ base: '0', lg: 'calc(50% - 12.5px)' }}
          left={{ base: '0', lg: 'calc(50% - 216px)' }}
        >
          <Navigation headerData={headerData} />
        </Box>
        <CartIconButton
          headerData={headerData}
          onCartModalOpen={onCartModalOpen}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
