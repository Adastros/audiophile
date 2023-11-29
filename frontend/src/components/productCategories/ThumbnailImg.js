import { Image } from '@chakra-ui/react';

const ThumbnailImg = ({ imgData }) => {
  return (
    <Image
      src={imgData.shared.path}
      alt={imgData.alt}
      h="auto"
      w={{ base: '140px', lg: '170px' }}
      paddingBottom="4px"
      zIndex="1"
    />
  );
};

export default ThumbnailImg;
