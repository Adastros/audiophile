import { Box } from '@chakra-ui/react';
import Picture from '../Picture';

const ClosingImage = ({ imgData }) => {
  return (
    <Box
      h="auto"
      w={{ base: '20.4375rem', md: '43.0625rem', lg: '100%' }}
      borderRadius="0.5rem"
    >
      <Picture imgData={imgData} />
    </Box>
  );
};

export default ClosingImage;
