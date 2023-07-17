import { Image, LinkOverlay, LinkBox } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

const IconLink = ({ iconPath, iconAriaLabel, routePath, isExternalUrl }) => {
  return (
    <LinkBox>
        <LinkOverlay as={ReactRouterLink} to={routePath} isExternal={isExternalUrl}>
          <Image src={iconPath} alt={iconAriaLabel} />
        </LinkOverlay>
    </LinkBox>
  );
};

export default IconLink;
