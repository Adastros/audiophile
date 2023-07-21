import { Heading } from '@chakra-ui/react';

const Hero = ({ headline }) => {
  return (
    <Heading
      as="h1"
      w="328px"
      paddingTop="16px"
      paddingBottom="24px"
      fontSize="design.h3"
      fontWeight="bold"
      lineHeight="40px"
      letterSpacing="1.286px"
      textAlign="center"
      textTransform="uppercase"
    >
      {headline}
    </Heading>
  );
};

export default Hero;
