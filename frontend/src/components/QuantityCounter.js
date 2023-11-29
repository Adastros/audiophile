import { HStack, Button, Box } from '@chakra-ui/react';

// Quantity defaults to 1 if no initial quantity is provided
const QuantityCounter = ({
  isCart,
  quantity = 1, // Defaults to 1 for product detail pages
  handlePlusButtonClick,
  handleMinusButtonClick,
}) => {
  return (
    <HStack
      h={isCart ? '2rem' : '3rem'}
      w={isCart ? '6rem' : '7.5rem'}
      gap="0"
      backgroundColor="brand.antiFlashWhite"
    >
      <Button
        flex="1"
        onClick={handleMinusButtonClick}
        variant="counterButton"
        size={isCart ? 'counterButtonCart' : 'counterButtonProductDetail'}
        _hover={{ color: 'brand.caramel', opacity: '1' }}
      >
        -
      </Button>
      <Box flex="1" margin="0 auto" textAlign="center">
        {quantity}
      </Box>
      <Button
        flex="1"
        onClick={handlePlusButtonClick}
        variant="counterButton"
        size={isCart ? 'counterButtonCart' : 'counterButtonProductDetail'}
        _hover={{ color: 'brand.caramel', opacity: '1' }}
      >
        +
      </Button>
    </HStack>
  );
};

export default QuantityCounter;
