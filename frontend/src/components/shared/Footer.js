import { Flex } from '@chakra-ui/react';
import CompanyName from './CompanyName';
import FooterNav from './FooterNav';
import About from './About';
import Copyright from './Copyright';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <Flex direction="column" align="center" backgroundColor="grey">
      <CompanyName />
      <FooterNav />
      <About />
      <Copyright />
      <SocialLinks />
    </Flex>
  );
};

export default Footer;
