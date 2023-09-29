import { useOutletContext, useLoaderData } from 'react-router-dom';
import { Flex, VStack, Box } from '@chakra-ui/react';
import GoBackLink from '../shared/GoBackLink';
import CheckoutForm from './CheckoutForm';
import CheckoutSummary from './CheckoutSummary';

const CheckoutPage = () => {
  const headerData = useOutletContext().headerData;
  const checkoutData = useLoaderData();

  return (
    <Box
      h="min-content"
      w="100%"
      paddingX={{ base: '0', lg: '1.5rem' }}
      backgroundColor="brand.antiFlashWhite"
    >
      <VStack
        w={{ base: '20.4375rem', md: '43.0625rem', lg: '100%' }}
        maxW="69.375rem"
        margin="0 auto"
        paddingTop={{ base: '1rem', md: '3rem', lg: '5rem' }}
        gap="1.5rem"
      >
        <GoBackLink />
        <Flex
          w="100%"
          marginBottom={{ base: '0', lg: '8.75rem' }}
          direction={{ base: 'column', lg: 'row' }}
          align={{ base: 'center', lg: 'flex-start' }}
          justify="center"
          gap={{ base: '2rem', lg: '1.875rem' }}
        >
          <CheckoutForm checkoutData={checkoutData} />
          <CheckoutSummary headerData={headerData} />
        </Flex>
      </VStack>
    </Box>
  );
};

export default CheckoutPage;
