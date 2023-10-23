import { useState } from 'react';
import { VStack, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import BillingDetails from './BillingDetails';
import ShippingInfo from './ShippingInfo';
import PaymentMethods from './PaymentMethods';
import headingStyles from '../../theme/headingStyles';
import { postData } from '../../utils/requests';

const CheckoutForm = ({
  checkoutData,
  errors,
  register,
  handleSubmit,
  resetField,
}) => {
  const [value, setValue] = useState('eMoney');
  const cart = useSelector(state => state.cart);

  const onSubmit = data => {
    // Filters for purchased items to add to request
    const purchasedItems = Object.fromEntries(
      Object.entries(cart).filter(item => {
        if (item[1]) return true;
      })
    );
    const formAndCartData = { ...data, items: purchasedItems };

    postData(formAndCartData);
  };

  const onPaymentRadioClick = newValue => {
    if (value === 'cash') {
      resetField('eMoneyNumber');
      resetField('eMoneyPin');
    }
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
          register={register}
          onPaymentRadioClick={onPaymentRadioClick}
        />
      </VStack>
    </VStack>
  );
};

export default CheckoutForm;
