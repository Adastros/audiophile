import { Text } from '@chakra-ui/react';

const ConfirmationMessage = () => {
  return (
    <Text
      marginBottom={{ base: '1.5rem', md: '2rem' }}
      textAlign="left"
      textStyle="feature"
    >
      You will receive an email confirmation shortly.
    </Text>
  );
};

export default ConfirmationMessage;
