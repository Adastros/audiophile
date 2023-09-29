import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  HStack,
} from '@chakra-ui/react';

const CountryInput = ({ errors, register }) => {
  const isError = errors.country ? '#CD2C2C' : 'black';

  return (
    <FormControl isRequired isInvalid={errors.country}>
      <HStack justify="space-between">
        <FormLabel color={isError} htmlFor="country" requiredIndicator="">
          Country
        </FormLabel>
        <FormErrorMessage variant="checkout">
          {errors.country && errors.country.message}
        </FormErrorMessage>
      </HStack>
      <Input
        id="country"
        autoComplete="country-name"
        placeholder="United States"
        variant="checkout"
        {...register('country', {
          required: {
            value: true,
            message: 'Required field',
          },
        })}
      />
    </FormControl>
  );
};

export default CountryInput;
