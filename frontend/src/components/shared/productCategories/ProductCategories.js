import { Flex } from '@chakra-ui/react';
import HeadphoneThumbnail from './HeadphoneThumbnail';
import SpeakerThumbnail from './SpeakerThumbnail';
import EarphoneThumbnail from './EarphoneThumbnail';

const ProductCategories = () => {
  return (
    <Flex
      as="nav"
      id="product-categories"
      h="100%"
      w="100%"
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify={{ base: 'center', md: 'space-between' }}
      backgroundColor="inherit"
      gap={{ base: '2rem', md: '0.625rem', lg: '1rem' }}
    >
      <HeadphoneThumbnail />
      <SpeakerThumbnail />
      <EarphoneThumbnail />
    </Flex>
  );
};

export default ProductCategories;
