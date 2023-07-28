import { useOutletContext } from 'react-router-dom';
import IconLink from './IconLink';

const TwitterIconLink = () => {
  const footerData = useOutletContext()[2];
  const twitterIconData = footerData.footer.socialIcon.twitter;

  return (
    <IconLink
      iconPath={twitterIconData.path}
      iconAriaLabel={twitterIconData.aria.label}
      routePath={twitterIconData.externalUrl}
      isExternalUrl={true}
    />
  );
};

export default TwitterIconLink;
