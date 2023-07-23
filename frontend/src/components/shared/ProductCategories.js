import { Flex } from '@chakra-ui/react';
import HeadphoneThumbnail from './HeadphoneThumbnail';
import SpeakerThumbnail from './SpeakerThumbnail';
import EarphoneThumbnail from './EarphoneThumbnail';

const ProductCategories = () => {
  return (
    <Flex px="24px" py="32px" direction="column" align="center" gap="8px">
      <HeadphoneThumbnail />
      <SpeakerThumbnail />
      <EarphoneThumbnail />
    </Flex>
  );
};

export default ProductCategories;
