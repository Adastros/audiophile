import { LinkBox, LinkOverlay, IconButton } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import CartIcon from './CartIcon';

const CartIconButton = ({ headerData }) => {
  const cartIconAriaLabel = headerData.icon.cart.aria.label;
  const cartRoute = headerData.route.cart;
  const cartIconUrl = headerData.icon.cart.path;

  return (
    <LinkBox>
      <LinkOverlay as={ReactRouterLink} to={cartRoute}>
        <IconButton
          id="cart-button"
          className="iconHover"
          aria-label={cartIconAriaLabel}
          icon={<CartIcon cartIconUrl={cartIconUrl} />}
          h="20px"
          w="23px"
          minW="0"
          padding="0"
          margin="0"
        />
      </LinkOverlay>
    </LinkBox>
  );
};

export default CartIconButton;
