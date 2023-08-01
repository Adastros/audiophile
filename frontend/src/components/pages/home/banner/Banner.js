import { Box, Flex } from '@chakra-ui/react';
import NewProduct from './NewProduct';
import Hero from './Hero';
import HeroSubtext from './HeroSubtext';
import SeeProductButton from '../../../shared/SeeProductButton';

const Banner = ({ heroData }) => {
  return (
    <Box
      id="homepage-banner"
      h="600px"
      w="100%"
      marginTop="-96px"
      color="white"
      backgroundImage={`url(${heroData.image.mobile.path})`}
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
        <NewProduct isNew={heroData.new} textVariant={'newProductBanner'} />
        <Hero headline={heroData.headline} />
        <HeroSubtext action={heroData.action} />
        <SeeProductButton
          buttonVariant="seeProductCaramel"
          buttonSize="designMd"
        />
      </Flex>
    </Box>
  );
};

export default Banner;
