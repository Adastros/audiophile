import { Icon, Box } from '@chakra-ui/react';
import { ReactSVG } from 'react-svg';

const CheckIcon = ({ checkIconData }) => {
  const checkIconUrl = checkIconData.path;
  const isCheckIconAriaHidden = checkIconData.aria.hidden;

  return (
    <Box h="4rem" w="4rem" marginBottom="2rem" alignSelf="flex-start">
      <Icon
        as={ReactSVG}
        src={checkIconUrl}
        aria-hidden={isCheckIconAriaHidden}
        h="100%"
        w="100%"
      />
    </Box>
  );
};

export default CheckIcon;
