import { Text } from '@chakra-ui/react';

const ClosingParagraph = ({ callToAction }) => {
  return (
    <Text
      w="327px"
      fontSize="design.body"
      fontWeight="500"
      lineHeight="design.body"
      letterSpacing="normal"
      textAlign="center"
      opacity="0.5"
    >
      {callToAction}
    </Text>
  );
};

export default ClosingParagraph;
