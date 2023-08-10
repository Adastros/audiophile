import { Button } from '@chakra-ui/react';

const AddToCartButton = ({ buttonVariant, buttonSize }) => {
  return (
    <Button variant={buttonVariant} size={buttonSize}>
      ADD TO CART
    </Button>
  );
};

export default AddToCartButton;
