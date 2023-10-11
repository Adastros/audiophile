import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  VStack,
  Flex,
} from '@chakra-ui/react';

const PaymentMethodRadio = ({ value, register, onPaymentRadioClick }) => {
  return (
    <FormControl as="fieldset">
      <Flex w="100%" direction={{ base: 'column', md: 'row' }} gap="1rem">
        <FormLabel as="legend" flex="1">
          Payment Method
        </FormLabel>
        <RadioGroup
          name="payment"
          flex="1"
          value={value}
          onChange={onPaymentRadioClick}
        >
          <VStack align="flex-start" gap="1rem">
            <Radio value="eMoney" variant="checkout" {...register('radio')}>
              e-Money
            </Radio>
            <Radio value="cash" variant="checkout" {...register('radio')}>
              Cash on Delivery
            </Radio>
          </VStack>
        </RadioGroup>
      </Flex>
    </FormControl>
  );
};

export default PaymentMethodRadio;
