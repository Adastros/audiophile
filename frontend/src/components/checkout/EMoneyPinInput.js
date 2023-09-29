import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  NumberInput,
  NumberInputField,
  HStack,
} from '@chakra-ui/react';

const EMoneyPinInput = ({ errors, register }) => {
  const isError = errors.eMoneyPin ? '#CD2C2C' : 'black';

  return (
    <FormControl isRequired isInvalid={errors.eMoneyPin}>
      <HStack justify="space-between">
        <FormLabel color={isError} htmlFor="eMoneyPin" requiredIndicator="">
          e-Money PIN
        </FormLabel>
        <FormErrorMessage variant="checkout">
          {errors.eMoneyPin && errors.eMoneyPin.message}
        </FormErrorMessage>
      </HStack>
      <NumberInput variant="checkout">
        <NumberInputField
          id="eMoneyPin"
          placeholder="6891"
          {...register('eMoneyPin', {
            required: {
              value: true,
              message: 'Required field',
            },
            maxLength: {
              value: 4,
              message: 'Enter a valid e-Money pin',
            },
            minLength: {
              value: 4,
              message: 'Enter a valid e-Money pin',
            },
          })}
        ></NumberInputField>
      </NumberInput>
    </FormControl>
  );
};

export default EMoneyPinInput;
