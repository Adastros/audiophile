import { LinkOverlay, LinkBox } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

const IconLink = ({ iconPath, routePath, iconAriaLabel, isExternalUrl }) => {
  return (
    <LinkBox w="1.5rem" className="iconHover">
      <LinkOverlay
        as={ReactRouterLink}
        to={routePath}
        isExternal={isExternalUrl}
      >
        <ReactSVG
          src={iconPath}
          afterInjection={svg => {
            svg.setAttribute('aria-label', iconAriaLabel);
          }}
        />
      </LinkOverlay>
    </LinkBox>
  );
};

export default IconLink;
