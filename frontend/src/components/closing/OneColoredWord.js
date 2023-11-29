import { Box } from '@chakra-ui/react';

const OneColoredWord = ({ color, word }) => {
  return (
    <Box as="span" color={color} textTransform="uppercase">
      {` ${word} `}
    </Box>
  );
};

export default OneColoredWord;
