import { useOutletContext, useLoaderData } from 'react-router-dom';
import { Flex, VStack, Box } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import GoBackLink from '../shared/GoBackLink';
import CheckoutForm from './CheckoutForm';
import CheckoutSummary from './CheckoutSummary';

const CheckoutPage = () => {
  const headerData = useOutletContext().headerData;
  const setGrandTotal = useOutletContext().setGrandTotal;
  const checkoutData = useLoaderData();
  const {
    register, // registers input component to react-hook-form
    handleSubmit,
    resetField, // manually reset a specific input field's value, error, and state
    formState: { errors, isValid },
  } = useForm({
    shouldUnregister: true, // Unregisters inputs that were unmounted (removed from DOM)
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      zipCode: '',
      city: '',
      country: '',
      eMoneyNumber: '',
      eMoneyPin: '',
    },
  });

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
          <CheckoutForm
            checkoutData={checkoutData}
            errors={errors}
            register={register}
            handleSubmit={handleSubmit}
            resetField={resetField}
          />
          <CheckoutSummary
            headerData={headerData}
            setGrandTotal={setGrandTotal}
            isValid={isValid}
          />
        </Flex>
      </VStack>
    </Box>
  );
};

export default CheckoutPage;
