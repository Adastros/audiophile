import { Flex, Box } from '@chakra-ui/react';
import ThumbnailImg from './ThumbnailImg';
import ThumbNailText from './ThumbnailText';
import ShopLink from './ShopLink';

// paddingTop is optional and only used for the earphones
// thumbnail due to the image being set slightly higher than
// the others
const ThumbnailBase = ({ route, imgData, text, padTop }) => {
  return (
    <Flex
      h="min-content"
      w={{ base: '327px', md: '217px', lg: '350px' }}
      paddingTop={padTop}
      direction="column"
      align="center"
      position="relative"
    >
      <Box
        h={{ base: '165px', lg: '185px' }}
        w="100%"
        zIndex="0"
        position="absolute"
        top={{ base: '3.25rem', lg: '3.9rem' }}
        left="0"
        borderRadius="0.5rem"
        backgroundColor="brand.antiFlashWhite"
      ></Box>
      <ThumbnailImg imgData={imgData} />
      <ThumbNailText text={text} />
      <ShopLink route={route} />
    </Flex>
  );
};

export default ThumbnailBase;
