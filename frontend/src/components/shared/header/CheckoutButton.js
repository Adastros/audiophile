import { LinkOverlay, LinkBox, Button } from '@chakra-ui/react';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

const CheckoutButton = ({ buttonVariant, buttonSize, route }) => {
  return (
    <LinkBox w='100%'>
      <LinkOverlay as={ReactRouterLink} to={route}>
        <Button variant={buttonVariant} size={buttonSize}>
          CHECKOUT
        </Button>
      </LinkOverlay>
    </LinkBox>
  );
};

export default CheckoutButton;
