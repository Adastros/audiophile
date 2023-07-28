import { LinkOverlay, LinkBox, Icon } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

const IconLink = ({ iconPath, iconAriaLabel, routePath, isExternalUrl }) => {
  return (
    <LinkBox className="iconHover">
      <LinkOverlay
        as={ReactRouterLink}
        to={routePath}
        isExternal={isExternalUrl}
      >
        <Icon as={ReactSVG} src={iconPath} aria-label={iconAriaLabel}/>
      </LinkOverlay>
    </LinkBox>
  );
};

export default IconLink;
