import { Flex, Box } from '@chakra-ui/react';
import Logo from '../Logo';
import NavLinks from '../NavLinks';
import About from './About';
import Copyright from './Copyright';
import SocialLinks from './SocialLinks';

const Footer = ({ footerData, logoData }) => {
  const aboutText = footerData.about;
  const copyrightText = footerData.copyright;
  const socialIcons = footerData.socialIcon;
  const flexDir = { base: 'column', md: 'row' };
  const gaps = { base: '1rem', md: '2.125rem' };

  return (
    <Flex
      w="100%"
      paddingTop={{ base: '3rem' }}
      paddingBottom={{ base: '2.375rem' }}
      paddingX={{ base: '0', md: '2.5rem' }}
      align="center"
      justify="center"
      textAlign={{ base: 'center', md: 'left' }}
      color="white"
      backgroundColor="black"
      data-cy="footer"
    >
      <Flex
        w="100%"
        maxW="69.375rem"
        position="relative"
        direction="column"
        align={{ base: 'center', md: 'flex-start' }}
        gap={{ base: '3rem', md: '2rem' }}
      >
        <Box
          h="4px"
          w="6.25rem"
          position="absolute"
          top="-3rem"
          left={{ base: 'calc(50% - 3.125rem)', md: '0' }}
          backgroundColor="brand.caramel"
        />
        <Flex
          w="100%"
          direction={{ base: 'column', lg: 'row' }}
          align={{ base: 'center', md: 'flex-start', lg: 'center' }}
          justify="space-between"
          gap={{ base: '3rem', md: '2rem' }}
        >
          <Logo logoData={logoData} />
          <NavLinks flexDir={flexDir} gaps={gaps} />
        </Flex>
        <About aboutText={aboutText} />
        <Flex
          w="100%"
          marginTop={{ base: '0', md: '3rem' }}
          position="relative"
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          gap={{ base: '3rem', md: '0' }}
        >
          <Copyright copyrightText={copyrightText} />
          <Box position="relative" top={{ base: '0', lg: '-7rem' }}>
            <SocialLinks socialIcons={socialIcons} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
