import { VStack, Box, Heading } from '@chakra-ui/react';
import SeeProductButton from '../../../shared/SeeProductButton';
import headingStyles from '../../../../theme/headingStyles';

const TertiaryLinkCard = ({ productName, route }) => {
  return (
    <Box w="100%">
      <VStack
        h={{ base: '12.5rem', md: '20rem' }}
        w="100%"
        maxW={{ base: '20.4375rem', md: '21.1875rem', lg: '33.75rem' }}
        paddingLeft={{ base: '1.5rem', md: '2.5625rem', lg: '5.9375rem' }}
        align="flex-start"
        justify="center"
        gap="2rem"
        borderRadius="0.5rem"
        backgroundColor="brand.antiFlashWhite"
      >
        <Heading as="h3" {...headingStyles.secondaryProduct}>
          {productName}
        </Heading>
        <SeeProductButton
          buttonVariant="seeProductWhite"
          buttonSize="designMd"
          route={route}
        />
      </VStack>
    </Box>
  );
};

export default TertiaryLinkCard;
