import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
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
      <Input
        id="zip-code"
        type="number"
        placeholder="10001"
        variant="checkout"
        errorBorderColor="#CD2C2C"
        {...register('zipCode', {
          required: {
            value: true,
            message: 'Required field',
          },
          maxLength: {
            value: 10,
            message: 'Enter a valid zip code',
          },
          valueAsNumber: true,
        })}
      />
    </FormControl>
  );
};

export default ZipCodeInput;
