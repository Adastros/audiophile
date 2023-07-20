import { Flex } from '@chakra-ui/react';
import Logo from './Logo';
import FooterNav from './FooterNav';
import About from './About';
import Copyright from './Copyright';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <Flex direction="column" align="center" backgroundColor="grey">
      <Logo />
      <FooterNav />
      <About />
      <Copyright />
      <SocialLinks />
    </Flex>
  );
};

export default Footer;
