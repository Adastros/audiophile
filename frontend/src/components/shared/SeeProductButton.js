import { LinkOverlay, LinkBox, Button } from '@chakra-ui/react';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

const SeeProductButton = ({
  buttonVariant,
  buttonSize,
  route,
  setQuantity,
}) => {
  const handleButtonClick = () => {
    if (!setQuantity) return null;

    setQuantity(1);
  };

  return (
    <LinkBox onClick={handleButtonClick}>
      <LinkOverlay as={ReactRouterLink} to={route}>
        <Button variant={buttonVariant} size={buttonSize}>
          See Product
        </Button>
      </LinkOverlay>
    </LinkBox>
  );
};

export default SeeProductButton;
