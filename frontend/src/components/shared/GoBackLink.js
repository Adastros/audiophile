import { Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const GoBackLink = () => {
  const navigate = useNavigate();

  const onLinkClick = () => {
    navigate(-1);
  };

  return (
    <Link
      onClick={onLinkClick}
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
