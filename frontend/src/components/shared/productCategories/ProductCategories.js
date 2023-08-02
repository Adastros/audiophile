import { Flex } from '@chakra-ui/react';
import HeadphoneThumbnail from './HeadphoneThumbnail';
import SpeakerThumbnail from './SpeakerThumbnail';
import EarphoneThumbnail from './EarphoneThumbnail';

const ProductCategories = () => {
  return (
    <Flex
      id="product-categories"
      h="100%"
      px="24px"
      py="32px"
      direction="column"
      align="center"
      gap="8px"
      backgroundColor="white"
    >
      <HeadphoneThumbnail />
      <SpeakerThumbnail />
      <EarphoneThumbnail />
    </Flex>
  );
};

export default ProductCategories;
