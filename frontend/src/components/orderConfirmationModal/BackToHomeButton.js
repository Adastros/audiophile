import { LinkOverlay, LinkBox, Button } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

const BackToHomeButton = ({ buttonVariant, buttonSize, route }) => {
  return (
    <LinkBox w="100%">
      <LinkOverlay as={ReactRouterLink} to={route}>
        <Button variant={buttonVariant} size={buttonSize}>
          BACK TO HOME
        </Button>
      </LinkOverlay>
    </LinkBox>
  );
};

export default BackToHomeButton;
