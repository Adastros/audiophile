import { Button } from '@chakra-ui/react';

const SeeProductButton = ({ buttonVariant, buttonSize }) => {
  return (
    <Button as="a" variant={buttonVariant} size={buttonSize}>
      See Product
    </Button>
  );
};

export default SeeProductButton;
