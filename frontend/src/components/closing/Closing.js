import { Flex, VStack, Box } from '@chakra-ui/react';
import ClosingImage from './ClosingImage';
import ClosingHeadline from './ClosingHeadline';
import ClosingParagraph from './ClosingParagraph';

const Closing = ({ closingData }) => {
  const imgData = closingData.image;
  const headline = closingData.headline;
  const callToAction = closingData.action;

  return (
    <Box w="100%" paddingX={{ base: '1.5rem', md: '2.5rem' }}>
      <Flex
        w={{ base: '20.4375rem', md: '40.0625rem', lg: '100%' }}
        maxW="69.375rem"
        margin="0 auto"
        paddingBottom={{ base: '7.5rem', md: '6rem', lg: '10.5rem' }}
        direction={{ base: 'column', lg: 'row-reverse' }}
        align="center"
        justify="space-between"
        gap={{ base: '2rem', md: '3rem', lg: '8rem' }}
        data-cy="closing"
      >
        <ClosingImage imgData={imgData} />
        <VStack gap="2rem">
          <ClosingHeadline headline={headline} />
          <ClosingParagraph callToAction={callToAction} />
        </VStack>
      </Flex>
    </Box>
  );
};

export default Closing;
