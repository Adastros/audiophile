import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  HStack,
} from '@chakra-ui/react';

const PhoneNumberInput = ({ errors, register }) => {
  // A general regex for international phone numbers.
  // Requires the "+" in front of phone number.
  // Minimum1 digit for national number and US land line centric
  // access code 011 not accepted.
  // See https://stackoverflow.com/questions/2113908/what-regular-expression-will-match-valid-international-phone-numbers
  const phoneRegex =
    /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,2})$/;
  const isError = errors.phone ? '#CD2C2C' : 'black';

  return (
    <FormControl isRequired isInvalid={errors.phone}>
      <HStack justify="space-between">
        <FormLabel color={isError} htmlFor="phone" requiredIndicator="">
          Phone Number
        </FormLabel>
        <FormErrorMessage variant="checkout">
          {errors.phone && errors.phone.message}
        </FormErrorMessage>
      </HStack>
      <Input
        id="phone"
        type="tel"
        autoComplete="tel"
        placeholder="+1 (555) 555-5555"
        variant="checkout"
        errorBorderColor="#CD2C2C"
        {...register('phone', {
          required: {
            value: true,
            message: 'Required field',
          },
          maxLength: {
            value: 13,
            message: 'Enter valid a phone number',
          },
          minLength: {
            value: 11,
            message: 'Enter valid a phone number',
          },
          pattern: {
            value: phoneRegex,
            message: 'Wrong format',
          },
        })}
      />
    </FormControl>
  );
};

export default PhoneNumberInput;
