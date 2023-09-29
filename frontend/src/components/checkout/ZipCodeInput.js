import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  NumberInput,
  NumberInputField,
  HStack,
} from '@chakra-ui/react';

const ZipCodeInput = ({ errors, register }) => {
  const isError = errors.zipCode ? '#CD2C2C' : 'black';

  return (
    <FormControl isRequired isInvalid={errors.zipCode}>
      <HStack justify="space-between">
        <FormLabel color={isError} htmlFor="zip-code" requiredIndicator="">
          Zip Code
        </FormLabel>
        <FormErrorMessage variant="checkout">
          {errors.zipCode && errors.zipCode.message}
        </FormErrorMessage>
      </HStack>
      <NumberInput variant="checkout">
        <NumberInputField
          id="zip-code"
          autoComplete="postal-code"
          placeholder="10001"
          errorBorderColor="#CD2C2C"
          {...register('zipCode', {
            required: {
              value: true,
              message: 'Required field',
            },
            maxLength: {
              value: 10,
              message: 'Please enter a valid zip code',
            },
          })}
        />
      </NumberInput>
    </FormControl>
  );
};

export default ZipCodeInput;
