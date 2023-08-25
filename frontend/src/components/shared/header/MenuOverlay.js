import { Box } from '@chakra-ui/react';
import ProductCategories from '../productCategories/ProductCategories';

const MenuOverlay = ({ displayCssValue }) => {
  return (
    <Box
      h="100%"
      w="100%"
      zIndex="5"
      position="absolute"
      top="5.5625rem"
      left="0"
      display={displayCssValue}
      sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <Box
        // prevents the bottom of menu from partly covering the earphone link
        // when the overlay is larger than the screen height by creating an
        // overflow within this container.
        maxH={{ base: 'calc(100vh - 5.625rem)' }}
        w="100%"
        paddingTop={{ base: '2rem', md: '3rem' }}
        paddingBottom={{ base: '3.5rem', md: '5rem' }}
        paddingX={{ base: '0', md: '2.5rem' }}
        overflowX="hidden"
        overflowY="auto"
        backgroundColor="white"
        borderRadius="0px 0px 8px 8px"
      >
        <ProductCategories />
      </Box>
    </Box>
  );
};

export default MenuOverlay;
