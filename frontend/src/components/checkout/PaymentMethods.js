import { Flex, VStack, Box, Heading } from '@chakra-ui/react';
import headingStyles from '../../theme/headingStyles';
import PaymentMethodRadio from './PaymentMethodRadio';
import EMoneyNumberInput from './EMoneyNumberInput';
import EMoneyPinInput from './EMoneyPinInput';
import CashOnDeliveryMessage from './CashOnDeliveryMessage';

const PaymentMethods = ({
  checkoutData,
  value,
  errors,
  register,
  onPaymentRadioClick,
}) => {
  const isMethodCash = value === 'cash';

  return (
    <VStack as="section" w="100%" align="flex-start" gap="1rem">
      <Heading as="h2" {...headingStyles.checkoutSection}>
        PAYMENT DETAILS
      </Heading>
      <VStack w="100%" align="flex-start" gap={{ base: '2rem', md: '1.5rem' }}>
        <PaymentMethodRadio
          value={value}
          register={register}
          onPaymentRadioClick={onPaymentRadioClick}
        />
        {isMethodCash ? (
          <Box
            w="100%"
            marginTop={{ base: '0', md: '0.375rem' }}
            display={isMethodCash ? 'flex' : 'none'}
          >
            <CashOnDeliveryMessage checkoutData={checkoutData} />
          </Box>
        ) : (
          <Flex
            w="100%"
            direction={{ base: 'column', md: 'row' }}
            wrap="nowrap"
            gap={{ base: '1.5rem', md: '1rem' }}
          >
            <EMoneyNumberInput errors={errors} register={register} />
            <EMoneyPinInput errors={errors} register={register} />
          </Flex>
        )}
      </VStack>
    </VStack>
  );
};

export default PaymentMethods;
