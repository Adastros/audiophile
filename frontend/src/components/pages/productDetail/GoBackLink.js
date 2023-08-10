import { Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

const GoBackLink = ({ goBackUrl }) => {
  return (
    <Link
      as={ReactRouterLink}
      to={goBackUrl}
      alignSelf="flex-start"
      fontSize="15px"
      fontWeight="500"
      lineHeight="25px"
      opacity="0.5"
    >
      Go Back
    </Link>
  );
};

export default GoBackLink;
