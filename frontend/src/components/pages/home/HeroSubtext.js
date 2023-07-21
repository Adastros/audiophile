import { Text } from '@chakra-ui/react';

const HeroSubtext = ({ action }) => {
  return (
    <Text
      w="328px"
      paddingBottom="28px"
      fontSize="design.body"
      fontWeight="medium"
      lineHeight="design.subtitle"
      textAlign="center"
      opacity="0.75"
    >
      {action}
    </Text>
  );
};

export default HeroSubtext;
