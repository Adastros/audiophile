import { useOutletContext, useLoaderData } from 'react-router-dom';
import { Flex, VStack, Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import GoBackLink from '../components/GoBackLink';
import CheckoutForm from '../components/checkout/CheckoutForm';
import CheckoutSummary from '../components/checkout/CheckoutSummary';

const CheckoutPage = () => {
  const headerData = useOutletContext().headerData;
  const outletContext = useOutletContext();
  const checkoutFormDemoData = useOutletContext().demoData.form;
  const checkoutData = useLoaderData();
  const {
    register, // registers input component to react-hook-form
    handleSubmit,
    resetField, // manually reset a specific input field's value, error, and state
    setValue, // set values for fields
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
      stateProvince: '',
      country: '',
      radio: 'eMoney',
      eMoneyNumber: '',
      eMoneyPin: '',
    },
  });

  const handleCheckoutDemoButtonClick = () => {
    Object.entries(checkoutFormDemoData).forEach(field => {
      const registerName = field[0];
      const value = field[1];

      setValue(registerName, value, { shouldValidate: true });
    });
  };

  return (
    <Box
      h="min-content"
      w="100%"
      paddingX={{ base: '0', lg: '1.5rem' }}
      backgroundColor="brand.antiFlashWhite"
    >
      <Helmet>
        <title>audiophile | Checkout</title>
      </Helmet>
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
            outletContext={outletContext}
            isValid={isValid}
            handleCheckoutDemoButtonClick={handleCheckoutDemoButtonClick}
          />
        </Flex>
      </VStack>
    </Box>
  );
};

export default CheckoutPage;
