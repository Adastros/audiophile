import { Box, Flex } from '@chakra-ui/react';
import NewProduct from './NewProduct';
import Hero from './Hero';
import HeroSubtext from './HeroSubtext';
import SeeProductButton from '../../shared/SeeProductButton';

const Banner = ({ heroData }) => {
  return (
    <Box
      h="600px"
      w="100%"
      marginTop="-6rem"
      color="brand.white"
      backgroundImage={`url(${heroData.image.mobile.path})`}
      backgroundColor="brand.black"
      backgroundSize="100% 100%"
      backgroundRepeat="no-repeat"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        paddingTop="12.4rem"
        margin="0 auto"
      >
        <NewProduct isNew={heroData.new} textVariant={'newProductBanner'} />
        <Hero headline={heroData.headline} />
        <HeroSubtext action={heroData.action} />
        <SeeProductButton />
      </Flex>
    </Box>
  );
};

export default Banner;
