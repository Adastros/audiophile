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
      h="217px"
      w="327px"
      paddingTop={padTop}
      direction="column"
      align="center"
      position="relative"
    >
      <Box
        h="165px"
        w="100%"
        zIndex="0"
        position="absolute"
        top="52px"
        left="0"
        borderRadius="8px"
        backgroundColor="brand.antiFlashWhite"
      ></Box>
      <ThumbnailImg imgData={imgData} />
      <ThumbNailText text={text} />
      <ShopLink route={route} />
    </Flex>
  );
};

export default ThumbnailBase;
