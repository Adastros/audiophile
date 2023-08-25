import { Flex, VStack } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';
import ClosingImage from './ClosingImage';
import ClosingHeadline from './ClosingHeadline';
import ClosingParagraph from './ClosingParagraph';

const Closing = () => {
  const closingData = useOutletContext()[1];
  const imgData = closingData.image;
  const headline = closingData.headline;
  const callToAction = closingData.action;

  return (
    <Flex
      w="100%"
      maxW="69.375rem"
      id="closing"
      direction={{ base: 'column', lg: 'row-reverse' }}
      align="center"
      justify="space-between"
      gap={{ base: '2rem', md: '3rem', lg: '8rem' }}
    >
      <ClosingImage imgData={imgData} />
      <VStack gap="2rem">
        <ClosingHeadline headline={headline} />
        <ClosingParagraph callToAction={callToAction} />
      </VStack>
    </Flex>
  );
};

export default Closing;
