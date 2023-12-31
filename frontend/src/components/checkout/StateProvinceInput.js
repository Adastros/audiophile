import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  HStack,
} from '@chakra-ui/react';

const StateProvinceInput = ({ errors, register }) => {
  const isError = errors.name ? '#CD2C2C' : 'black';

  return (
    <FormControl isRequired isInvalid={errors.name}>
      <HStack justify="space-between">
        <FormLabel color={isError} htmlFor="state-province" requiredIndicator="">
          State/ Province
        </FormLabel>
        <FormErrorMessage variant="checkout">
          {/*
              Uses short circuiting to determine if this component renders.
              If errors.name is undefined, React JSX does not render it.
              If errors.name is true, then the the logical AND returns the
              second expression, errors.name.message.
            */}
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </HStack>
      <Input
        id="state-province"
        autoComplete="state-province"
        placeholder="Colorado"
        variant="checkout"
        errorBorderColor="#CD2C2C"
        {...register('stateProvince', {
          required: {
            value: true,
            message: 'Required field',
          },
          maxLength: {
            value: 100,
            message: 'Enter a valid state/ province',
          },
        })}
      />
    </FormControl>
  );
};

export default StateProvinceInput;
