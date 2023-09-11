import { HStack, Button, Box } from '@chakra-ui/react';

// Quantity defaults to 1 if no initial quantity is provided
const QuantityCounter = ({ isCart, initialQuantity = 1 }) => {
  return (
    <HStack
      h={isCart ? '2rem' : '3rem'}
      w={isCart ? '6rem' : '7.5rem'}
      gap="0"
      backgroundColor="brand.antiFlashWhite"
    >
      <Button variant="counterButton" size="counterButton">
        -
      </Button>
      <Box margin="0 auto">{initialQuantity}</Box>
      <Button variant="counterButton" size="counterButton">
        +
      </Button>
    </HStack>
  );
};

export default QuantityCounter;
