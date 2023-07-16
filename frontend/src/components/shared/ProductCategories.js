import { Center, Flex } from '@chakra-ui/react';
import HeadphoneThumbnail from './HeadphoneThumbnail';
import SpeakerThumbnail from './SpeakerThumbnail';
import EarphoneThumbnail from './EarphoneThumbnail';

const ProductCategories = () => {
  return (
    <Center>
      <Flex direction="column" align="center">
        <HeadphoneThumbnail />
        <SpeakerThumbnail />
        <EarphoneThumbnail />
      </Flex>
    </Center>
  );
};

export default ProductCategories;
