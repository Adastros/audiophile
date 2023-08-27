import { Flex, VStack } from '@chakra-ui/react';
import ClosingImage from './ClosingImage';
import ClosingHeadline from './ClosingHeadline';
import ClosingParagraph from './ClosingParagraph';

const Closing = ({ closingData }) => {
  const imgData = closingData.image;
  const headline = closingData.headline;
  const callToAction = closingData.action;

  return (
    <Flex
      id="closing"
      w="100%"
      maxW="69.375rem"
      paddingBottom={{ base: '7.5rem', md: '6rem', lg: '10.5rem' }}
      paddingX={{ base: '1.5rem', md: '2.5rem', lg: '3rem' }}
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
