import { Button } from '@chakra-ui/react';

const CartDemoButton = ({ handleCartDemoButtonClick }) => {
  return (
    <Button
      marginTop="1rem"
      colorScheme="blue"
      size="checkout"
      onClick={handleCartDemoButtonClick}
    >
      Demo Cart
    </Button>
  );
};

export default CartDemoButton;
