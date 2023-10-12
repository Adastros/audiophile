import { LinkOverlay, LinkBox, Button } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../reducers/cartReducer';

const BackToHomeButton = ({ buttonVariant, buttonSize, route }) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(clearCart());
  };

  return (
    <LinkBox w="100%" onClick={handleButtonClick}>
      <LinkOverlay as={ReactRouterLink} to={route}>
        <Button variant={buttonVariant} size={buttonSize}>
          BACK TO HOME
        </Button>
      </LinkOverlay>
    </LinkBox>
  );
};

export default BackToHomeButton;
