import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  HStack,
} from '@chakra-ui/react';

const EMoneyNumberInput = ({ errors, register }) => {
  const isError = errors.eMoneyNumber ? '#CD2C2C' : 'black';

  return (
    <FormControl isRequired isInvalid={errors.eMoneyNumber}>
      <HStack justify="space-between">
        <FormLabel color={isError} htmlFor="eMoneyNumber" requiredIndicator="">
          e-Money Number
        </FormLabel>
        <FormErrorMessage variant="checkout">
          {errors.eMoneyNumber && errors.eMoneyNumber.message}
        </FormErrorMessage>
      </HStack>
      <Input
        id="eMoneyNumber"
        type="number"
        placeholder="238521993"
        variant="checkout"
        errorBorderColor="#CD2C2C"
        {...register('eMoneyNumber', {
          required: {
            value: true,
            message: 'Required field',
          },
          maxLength: {
            value: 9,
            message: 'Enter a valid e-Money number',
          },
          minLength: {
            value: 9,
            message: 'Enter a valid e-Money number',
          },
        })}
      />
    </FormControl>
  );
};

export default EMoneyNumberInput;
