import { Box } from '@chakra-ui/react';
import ProductCategories from '../productCategories/ProductCategories';

const MenuOverlay = ({ displayCssValue }) => {
  return (
    <Box
      h="100%"
      w="100%"
      zIndex="5"
      position="absolute"
      top="89px"
      left="0"
      display={displayCssValue}
      sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <Box
        maxH="calc(100vh - 89px)"
        w="100%"
        paddingY="32px"
        overflowX="hidden"
        overflowY="scroll"
        backgroundColor="white"
      >
        <ProductCategories />
      </Box>
    </Box>
  );
};

export default MenuOverlay;
