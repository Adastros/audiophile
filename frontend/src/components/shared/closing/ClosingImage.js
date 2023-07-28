import { Image } from '@chakra-ui/react';

const ClosingImage = ({ imgUrl, imgAlt }) => {
  return (
    <Image src={imgUrl} alt={imgAlt} h="auto" w="327px" borderRadius="8px" />
  );
};

export default ClosingImage;
