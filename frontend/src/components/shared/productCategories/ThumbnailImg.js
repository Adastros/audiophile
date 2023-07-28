import { Image } from '@chakra-ui/react';

const ThumbnailImg = ({ imgData }) => {
  return (
    <Image
      src={imgData.shared.path}
      alt={imgData.alt}
      h="auto"
      w="140px"
      paddingBottom="4px"
      zIndex="1"
    />
  );
};

export default ThumbnailImg;
