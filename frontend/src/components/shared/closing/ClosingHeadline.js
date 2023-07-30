import { Heading } from '@chakra-ui/react';
import OneColoredWord from './OneColoredWord';
import headingStyles from '../../../theme/headingStyles';

const ClosingHeadline = ({ headline }) => {
  const lowerCaseText = headline.toLowerCase();
  const word = 'best';

  const wordsOfText = lowerCaseText.split(' ');
  const wordIdx = wordsOfText.indexOf(word);
  const textBegin = wordsOfText.slice(0, wordIdx).join(' ');
  const textEnd = wordsOfText.slice(wordIdx + 1).join(' ');

  return (
    <Heading as="h3" w="327px" textAlign="center" {...headingStyles.mdHeading}>
      {textBegin}

      <OneColoredWord color="brand.caramel" word={word} />

      {textEnd}
    </Heading>
  );
};

export default ClosingHeadline;
