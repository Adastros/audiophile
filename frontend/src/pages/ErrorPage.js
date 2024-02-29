import { VStack, Heading, Text, Box, Center } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import BackToHomeButton from '../components/404Error/BackToHomeButton';
import headingStyles from '../theme/headingStyles';

const ErrorPage = () => {
  const statusCode = '404';
  const message = `The page you are looking for doesn't exist! \nTry a different one.`;
  const route = '/';

  return (
    <Center flex="1" w="100%" paddingX={{ base: '0', lg: '3rem' }}>
      <Helmet>
        <title>audiophile | Error</title>
      </Helmet>
      <VStack
        w={{ base: '20.4375rem', md: '43.0625rem', lg: '100%' }}
        maxW="69.375rem"
        marginY={{ base: '4.875rem', md: '0' }}
        align="flex-start"
        justify="center"
        gap="0rem"
      >
        <VStack align="flex-start" gap="1.5rem" backgroundColor="brand.seaSalt">
          <Box>
            <Heading {...headingStyles.errorStatus}>{statusCode}</Heading>
            <Box
              h={{ base: '0.1875rem', md: '0.25rem' }}
              w={{ base: '3.1875rem', md: '3.9375rem', lg: '5.375rem' }}
              backgroundColor="brand.caramel"
            />
          </Box>
          <Text textStyle="errorStatus">{message}</Text>
          <Box h="min-content" w="10rem">
            <BackToHomeButton
              buttonVariant="seeProductCaramel"
              buttonSize="checkout"
              route={route}
            />
          </Box>
        </VStack>
      </VStack>
    </Center>
  );
};

export default ErrorPage;
