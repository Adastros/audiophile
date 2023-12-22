import { Button } from '@chakra-ui/react';
import { getNewCartId, completePurchase } from '../../utils/requests';

const PayButton = ({
  isValid,
  numOfCartItems,
  onOrderConfirmationModalOpen,
}) => {
  const handleButtonClick = async () => {
    // If user removes all items from cart during checkout,
    // prevent the user from completing their purchase.
    // If checkout form is not valid, do not complete the
    // purchase order.
    if (!numOfCartItems || !isValid) return;

    const cartId = localStorage.getItem('cartId');
    onOrderConfirmationModalOpen();
    completePurchase(cartId);

    // After completing purchase, create new cart and assign the client
    // a new cart ID.
    const newCartId = await getNewCartId();
    localStorage.setItem('cartId', newCartId);
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
