import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  HStack,
} from '@chakra-ui/react';

const AddressInput = ({ errors, register }) => {
  const isError = errors.address ? '#CD2C2C' : 'black';

  return (
    <FormControl isRequired isInvalid={errors.address}>
      <HStack justify="space-between">
        <FormLabel color={isError} htmlFor="address" requiredIndicator="">
          Your Address
        </FormLabel>
        <FormErrorMessage variant="checkout">
          {errors.address && errors.address.message}
        </FormErrorMessage>
      </HStack>
      <Input
        id="address"
        autoComplete="street-address"
        placeholder="1137 Williams Avenue"
        variant="checkout"
        {...register('address', {
          required: {
            value: true,
            message: 'Required field',
          },
          maxLength: {
            value: 100,
            message: 'Max character limit is 100',
          },
          minLength: {
            value: '3',
            message: 'Please enter a valid address',
          },
        })}
      />
    </FormControl>
  );
};

export default AddressInput;
