import { Flex, Box } from '@chakra-ui/react';
import Logo from '../Logo';
import NavLinks from '../NavLinks';
import About from './About';
import Copyright from './Copyright';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <Flex
      py="48px"
      position="relative"
      direction="column"
      align="center"
      gap="48px"
      textAlign="center"
      color="white"
      backgroundColor="black"
    >
      <Box
        h="4px"
        w="101px"
        position="absolute"
        top="0"
        margin="0 auto"
        backgroundColor="brand.caramel"
      ></Box>
      <Logo />
      <NavLinks />
      <About />
      <Copyright />
      <SocialLinks />
    </Flex>
  );
};

export default Footer;
