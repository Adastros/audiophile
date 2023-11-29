import { Text } from '@chakra-ui/react';

const HeroSubtext = ({ action }) => {
  return (
    <Text
      w={{ base: '328px', md: '375px' }}
      paddingBottom={{ base: '28px', md: '40px' }}
      textAlign={{ base: 'center', lg: 'left' }}
      opacity={0.75}
      textStyle={'productPreviewDescription'}
    >
      {action}
    </Text>
  );
};

export default HeroSubtext;
