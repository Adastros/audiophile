import { Button } from '@chakra-ui/react';

const PayButton = ({
  isValid,
  numOfCartItems,
  onOrderConfirmationModalOpen,
}) => {
  const handleButtonClick = () => {
    // If user removes all items from cart during checkout,
    // prevent the user from completing their purchase.
    if (numOfCartItems) {
      if (isValid) onOrderConfirmationModalOpen();
    }
  };

  return (
    <Button
      form="checkout-form"
      type="submit"
      variant="seeProductCaramel"
      size="checkout"
      onClick={handleButtonClick}
      _disabled={{
        _hover: {
          background: 'brand.atomicTangerine',
        },
      }}
    >
      CONTINUE & PAY
    </Button>
  );
};

export default PayButton;
