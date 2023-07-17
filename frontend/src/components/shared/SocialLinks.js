import { Flex } from '@chakra-ui/react';
import FacebookIconLink from './FacebookIconLink';
import TwitterIconLink from './TwitterIconLink';
import InstagramIconLink from './InstagramIconLink';

const SocialLinks = () => {
  return (
    <Flex align="center">
      <FacebookIconLink />
      <TwitterIconLink />
      <InstagramIconLink />
    </Flex>
  );
};

export default SocialLinks;
