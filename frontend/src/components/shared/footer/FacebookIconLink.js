import { useOutletContext } from 'react-router-dom';
import IconLink from './IconLink';

const FacebookIconLink = () => {
  const footerData = useOutletContext()[2];
  const facebookIconData = footerData.socialIcon.facebook;

  return (
    <IconLink
      iconPath={facebookIconData.path}
      iconAriaLabel={facebookIconData.aria.label}
      routePath={facebookIconData.externalUrl}
      isExternalUrl={true}
    />
  );
};

export default FacebookIconLink;
