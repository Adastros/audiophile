import { Flex } from '@chakra-ui/react';
import Picture from '../../shared/Picture';

const ImageDetail = ({ imgData }) => {
  return (
    <Flex
      h={{ base: '20.4375rem', md: '30rem', lg: '35rem' }}
      w="100%"
      maxW={{ base: '20.4375rem', md: '17.5625rem', lg: '33.75rem' }}
      marginBottom={{ base: '0.5rem', md: '0' }}
      align='center'
      justify='center'
      borderRadius='0.5rem'
      backgroundColor="brand.antiFlashWhite"
    >
      <Picture imgData={imgData} />
    </Flex>
  );
};

export default ImageDetail;
