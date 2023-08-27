import { Flex } from '@chakra-ui/react';
import IconLink from './IconLink';

const SocialLinks = ({ socialIcons }) => {
  const socialIconComponents = () => {
    return Object.keys(socialIcons).map(key => {
      const iconData = socialIcons[key];

      return (
        <IconLink
          key={`${key}SocialIcon`}
          iconPath={iconData.path}
          iconAriaLabel={iconData.aria.label}
          routePath={iconData.externalUrl}
          isExternalUrl={true}
        />
      );
    });
  };

  return (
    <Flex id="social-links" w="104px" align="center" justify="space-between">
      {socialIconComponents()}
    </Flex>
  );
};

export default SocialLinks;
