import { Heading } from '@chakra-ui/react';
import { colorOneHeadingWord } from '../../utils/helper';

const ClosingHeadline = ({ headline }) => {
  return (
    <Heading
      as="h3"
      w="327px"
      fontSize="design.h4"
      fontWeight="bold"
      lineHeight="normal"
      letterSpacing="design.subtitle"
      textAlign="center"
      textTransform="uppercase"
    >
      {colorOneHeadingWord(headline, 'best')}
    </Heading>
  );
};

export default ClosingHeadline;
