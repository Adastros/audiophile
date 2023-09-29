import { Button } from '@chakra-ui/react';

const PayButton = () => {
  return (
    <Button
      //   onClick={handleButtonCLick}
      form="checkout-form"
      type="submit"
      variant="seeProductCaramel"
      size="checkout"
    >
      CONTINUE & PAY
    </Button>
  );
};

export default PayButton;
