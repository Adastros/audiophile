import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
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
      <Input
        id="eMoneyPin"
        type="number"
        placeholder="6891"
        variant="checkout"
        errorBorderColor="#CD2C2C"
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
      />
    </FormControl>
  );
};

export default EMoneyPinInput;
