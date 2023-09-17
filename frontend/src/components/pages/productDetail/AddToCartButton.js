import { Button } from '@chakra-ui/react';

const AddToCartButton = ({ buttonVariant, buttonSize, handleButtonCLick }) => {
  return (
    <Button
      onClick={handleButtonCLick}
      variant={buttonVariant}
      size={buttonSize}
    >
      ADD TO CART
    </Button>
  );
};

export default AddToCartButton;
