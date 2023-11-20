import { Button } from '@chakra-ui/react';

const CheckoutDemoButton = ({ handleCheckoutDemoButtonClick }) => {
  return (
    <Button
      marginBottom="-1.5rem"
      colorScheme="blue"
      size="checkout"
      onClick={handleCheckoutDemoButtonClick}
    >
      Demo Checkout Form
    </Button>
  );
};

export default CheckoutDemoButton;
