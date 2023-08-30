import { Flex } from '@chakra-ui/react';
import Picture from '../Picture';

const ImagePreview = ({ productImgData }) => {
  return (
    <Flex
      h={{ base: '22rem', lg: '35rem' }}
      w="100%"
      maxW={{ base: '20.4375rem', md: '43.0625rem', lg: '33.75rem' }}
      align="center"
      justify="center"
      borderRadius="0.5rem"
      backgroundColor="brand.antiFlashWhite"
    >
      <Picture imgData={productImgData} />
    </Flex>
  );
};

export default ImagePreview;
