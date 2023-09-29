import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  HStack,
} from '@chakra-ui/react';

const EmailInput = ({ errors, register }) => {
  // Taken from emailregex.com
  // Javascript version of RFC 5322 official standard
  // Removed two "\" because per eslint they were unnecessary
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isError = errors.email ? '#CD2C2C' : 'black';

  return (
    <FormControl isRequired isInvalid={errors.email}>
      <HStack justify="space-between">
        <FormLabel color={isError} htmlFor="email" requiredIndicator="">
          Email Address
        </FormLabel>
        <FormErrorMessage variant="checkout">
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </HStack>
      <Input
        id="email"
        type="email"
        autoComplete="email"
        placeholder="JaneDoe@gmail.com"
        variant="checkout"
        errorBorderColor="#CD2C2C"
        {...register('email', {
          required: {
            value: true,
            message: 'Required field',
          },
          maxLength: {
            value: 100,
            message: 'Max character limit is 100',
          },
          minLength: {
            value: 6,
            message: 'Enter a valid email',
          },
          pattern: {
            value: emailRegex,
            message: 'Wrong format',
          },
        })}
      ></Input>
    </FormControl>
  );
};

export default EmailInput;
