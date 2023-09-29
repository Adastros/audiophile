import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  NumberInput,
  NumberInputField,
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
      <NumberInput variant="checkout">
        <NumberInputField
          id="eMoneyNumber"
          placeholder="238521993"
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
      </NumberInput>
    </FormControl>
  );
};

export default EMoneyNumberInput;
