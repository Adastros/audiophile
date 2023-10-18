import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  HStack,
} from '@chakra-ui/react';

const CityInput = ({ errors, register }) => {
  const isError = errors.city ? '#CD2C2C' : 'black';

  return (
    <FormControl isRequired isInvalid={errors.city}>
      <HStack justify="space-between">
        <FormLabel color={isError} htmlFor="city" requiredIndicator="">
          City
        </FormLabel>
        <FormErrorMessage variant="checkout" size="checkout">
          {errors.city && errors.city.message}
        </FormErrorMessage>
      </HStack>
      <Input
        id="city"
        autoComplete="address-level2"
        placeholder="New York"
        variant="checkout"
        {...register('city', {
          required: {
            value: true,
            message: 'Required field',
          },
          maxLength: {
            value: 100,
            message: 'Enter a valid city name',
          },
        })}
      />
    </FormControl>
  );
};

export default CityInput;
