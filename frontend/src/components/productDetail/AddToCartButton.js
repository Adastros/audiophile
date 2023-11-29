import { Button } from '@chakra-ui/react';

const AddToCartButton = ({ buttonVariant, buttonSize, handleButtonClick }) => {
  return (
    <Button
      onClick={handleButtonClick}
      variant={buttonVariant}
      size={buttonSize}
    >
      ADD TO CART
    </Button>
  );
};

export default AddToCartButton;
