import { LinkOverlay, LinkBox, Button } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

const CheckoutButton = ({
  buttonVariant,
  buttonSize,
  totalCartItems,
  route,
}) => {
  const isEmpty = !totalCartItems ? false : true;

  return (
    <LinkBox w="100%">
      <LinkOverlay as={ReactRouterLink} to={route}>
        <Button
          variant={buttonVariant}
          size={buttonSize}
          isDisabled={!isEmpty}
          _disabled={{
            _hover: {
              background: 'brand.atomicTangerine',
            },
          }}
        >
          CHECKOUT
        </Button>
      </LinkOverlay>
    </LinkBox>
  );
};

export default CheckoutButton;
