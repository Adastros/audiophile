import { Flex, Box } from '@chakra-ui/react';
import ThumbnailImg from './ThumbnailImg';
import ThumbNailText from './ThumbnailText';
import ShopLink from './ShopLink';

// padTop is optional and only used for the earphones
// thumbnail due to the image being set slightly higher
// than the others.
const ThumbnailBase = ({ route, imgData, text, padTop, menuModal }) => {
  return (
    <Flex
      h="100%"
      w={{ base: '327px', md: '217px', lg: '350px' }}
      paddingTop={padTop}
      paddingBottom={{ base: '1rem', lg: '2rem' }}
      direction="column"
      justifyContent="flex-end"
      align="center"
      position="relative"
    >
      <Box
        h={{ base: '165px', lg: '204px' }}
        w="100%"
        zIndex="0"
        position="absolute"
        bottom="0"
        left="0"
        borderRadius="0.5rem"
        backgroundColor="brand.antiFlashWhite"
      ></Box>
      <ThumbnailImg imgData={imgData} />
      <ThumbNailText text={text} />
      <ShopLink route={route} menuModal={menuModal} />
    </Flex>
  );
};

export default ThumbnailBase;
