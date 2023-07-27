import { Flex } from '@chakra-ui/react';
import FacebookIconLink from './FacebookIconLink';
import TwitterIconLink from './TwitterIconLink';
import InstagramIconLink from './InstagramIconLink';

const SocialLinks = () => {
  return (
    <Flex w="104px" align="center" justify="space-between">
      <FacebookIconLink />
      <TwitterIconLink />
      <InstagramIconLink />
    </Flex>
  );
};

export default SocialLinks;
