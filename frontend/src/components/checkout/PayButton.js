import { Button } from '@chakra-ui/react';

const PayButton = ({ onOrderConfirmationModalOpen }) => {
  return (
    <Button
      form="checkout-form"
      type="submit"
      variant="seeProductCaramel"
      size="checkout"
      onClick={onOrderConfirmationModalOpen}
    >
      CONTINUE & PAY
    </Button>
  );
};

export default PayButton;
