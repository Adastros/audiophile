import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { VStack, Heading } from '@chakra-ui/react';
import BillingDetails from './BillingDetails';
import ShippingInfo from './ShippingInfo';
import PaymentMethods from './PaymentMethods';
import headingStyles from '../../theme/headingStyles';

const CheckoutForm = ({ checkoutData }) => {
  const [value, setValue] = useState('eMoney');
  const {
    register, // registers input component to react-hook-form
    handleSubmit,
    formState: { errors }, // Get the error state of the form. Ca assess the name attribute of the input and error message
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault;
    console.log('Submit', data);
  };

  const onPaymentRadioClick = newValue => {
    setValue(newValue);
  };

  return (
    <VStack
      w={{ base: '100%', lg: '45.625rem' }}
      padding={{ base: '1.5rem', md: '1.875rem', lg: '3rem' }}
      align="flex-start"
      gap="2rem"
      borderRadius="0.5rem"
      backgroundColor="white"
    >
      <Heading as="h1" {...headingStyles.checkoutHeading}>
        CHECKOUT
      </Heading>
      <VStack
        as="form"
        id="checkout-form"
        action=""
        encType="text/plain"
        method="post"
        target="_self"
        w="100%"
        align="flex-start"
        gap={{ base: '2rem', md: '3.75rem' }}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <BillingDetails errors={errors} register={register} />
        <ShippingInfo errors={errors} register={register} />
        <PaymentMethods
          checkoutData={checkoutData}
          value={value}
          errors={errors}
          onPaymentRadioClick={onPaymentRadioClick}
          register={register}
        />
      </VStack>
    </VStack>
  );
};

export default CheckoutForm;
