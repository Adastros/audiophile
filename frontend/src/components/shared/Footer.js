import { Flex, Box } from '@chakra-ui/react';
import Logo from './Logo';
import FooterNav from './FooterNav';
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
      color="brand.white"
      backgroundColor="brand.black"
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
      <FooterNav />
      <About />
      <Copyright />
      <SocialLinks />
    </Flex>
  );
};

export default Footer;
