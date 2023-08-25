import { Box, Flex } from '@chakra-ui/react';
import NewProduct from '../../../shared/NewProduct';
import Hero from './Hero';
import HeroSubtext from './HeroSubtext';
import SeeProductButton from '../../../shared/SeeProductButton';

const Banner = ({ heroData }) => {
  const bannerImage = {
    mobile: heroData.image.mobile.path,
    tablet: heroData.image.tablet.path,
    desktop: heroData.image.desktop.path,
  };
  const isNew = heroData.new;
  const heroHeadline = heroData.headline;
  const heroSubtext = heroData.action;
  const productDetailPageRoute = heroData.route;

  return (
    <Box id="homepage-banner" w="100%" backgroundColor="#191919">
      <Flex
        maxWidth={{
          base: '24rem',
          sm: '37.5rem',
          md: '52rem',
          lg: '100rem',
        }}
        paddingX={{ base: '0', lg: '3rem' }}
        paddingBottom="3rem"
        marginTop="-6.5rem"
        marginX="auto"
        zIndex="0"
        direction="column"
        align="center"
        justify="center"
        backgroundImage={{
          base: `url(${bannerImage.mobile})`,
          sm: `url(${bannerImage.tablet})`,
          lg: `url(${bannerImage.desktop})`,
        }}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundColor="#191919"
      >
        <Box
          h={{ base: '600px', md: '775px', lg: '729px' }}
          width="100%"
          maxWidth="1110px"
          position="relative"
          color="white"
        >
          <Flex
            h="100%"
            position="relative"
            top={{ base: '4.5rem', md: '3rem' }}
            direction="column"
            align={{ base: 'center', lg: 'flex-start' }}
            justify="center"
          >
            <NewProduct isNew={isNew} textVariant="newProductBanner" />
            <Hero headline={heroHeadline} />
            <HeroSubtext action={heroSubtext} />
            <SeeProductButton
              buttonVariant="seeProductCaramel"
              buttonSize="designMd"
              route={productDetailPageRoute}
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Banner;
