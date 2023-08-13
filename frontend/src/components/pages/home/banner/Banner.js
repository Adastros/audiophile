import { Box, Flex } from '@chakra-ui/react';
import NewProduct from '../../../shared/NewProduct';
import Hero from './Hero';
import HeroSubtext from './HeroSubtext';
import SeeProductButton from '../../../shared/SeeProductButton';

const Banner = ({ heroData }) => {
  const bannerImageUrl = heroData.image.mobile.path;
  const isNew = heroData.new;
  const heroHeadline = heroData.headline;
  const heroSubtext = heroData.action;
  const productDetailPageRoute = heroData.route;

  return (
    <Box
      id="homepage-banner"
      h="600px"
      w="100%"
      marginTop="-96px"
      color="white"
      backgroundImage={`url(${bannerImageUrl})`}
      backgroundColor="black"
      backgroundSize="100% 100%"
      backgroundRepeat="no-repeat"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        paddingTop="198px"
        margin="0 auto"
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
  );
};

export default Banner;
