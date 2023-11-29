import { Text } from '@chakra-ui/react';

const ClosingParagraph = ({ callToAction }) => {
  return (
    <Text
      w={{ base: '20.4375rem', md: '35.8125rem', lg: '27.8125rem' }}
      textAlign={{ base: 'center', lg: 'left' }}
      textStyle="productPreviewDescription"
    >
      {callToAction}
    </Text>
  );
};

export default ClosingParagraph;
