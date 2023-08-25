import { useOutletContext } from 'react-router-dom';
import IconLink from './IconLink';

const InstagramIconLink = () => {
  const footerData = useOutletContext()[2];
  const instagramIconData = footerData.socialIcon.instagram;

  return (
    <IconLink
      iconPath={instagramIconData.path}
      iconAriaLabel={instagramIconData.aria.label}
      routePath={instagramIconData.externalUrl}
      isExternalUrl={true}
    />
  );
};

export default InstagramIconLink;
