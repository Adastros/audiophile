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
    <Heading
      as="h3"
      w={{ base: '20.4375rem', md: '35.8125rem', lg: '27.8125rem' }}
      textAlign={{ base: 'center', lg: 'left' }}
      {...headingStyles.mdHeading}
    >
      {textBegin}

      <OneColoredWord color="brand.caramel" word={word} />

      {textEnd}
    </Heading>
  );
};

export default ClosingHeadline;
