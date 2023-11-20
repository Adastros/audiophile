import { LinkOverlay, LinkBox, Button } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

const CheckoutButton = ({
  buttonVariant,
  buttonSize,
  isCartEmpty,
  route,
  onCartModalClose,
}) => {
  return (
    <LinkBox w="100%" onClick={onCartModalClose}>
      <LinkOverlay as={ReactRouterLink} to={route}>
        <Button
          variant={buttonVariant}
          size={buttonSize}
          isDisabled={!isCartEmpty}
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
