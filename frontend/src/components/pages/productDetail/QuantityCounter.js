import { HStack, Button, Box } from '@chakra-ui/react';

const QuantityCounter = () => {
  return (
    <HStack h="48px" w="120px" gap="0" backgroundColor="brand.antiFlashWhite">
      <Button variant="counterButton" size="counterButton">
        -
      </Button>
      <Box margin="0 auto">{1}</Box>
      <Button variant="counterButton" size="counterButton">
        +
      </Button>
    </HStack>
  );
};

export default QuantityCounter;
