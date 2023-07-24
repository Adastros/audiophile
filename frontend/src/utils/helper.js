import { Heading } from '@chakra-ui/react';
import { getPageContent } from './requests';

const getContent = async fileName => await getPageContent(fileName);

const colorOneHeadingWord = (text, word) => {
  const lowerCaseText = text.toLowerCase();
  const lowerCaseWord = word.toLowerCase();

  if (!lowerCaseText.includes(lowerCaseWord)) return text;

  const wordsOfText = lowerCaseText.split(' ');
  const wordIdx = wordsOfText.indexOf(lowerCaseWord);
  const textBegin = wordsOfText.slice(0, wordIdx).join(' ');
  const textEnd = wordsOfText.slice(wordIdx + 1).join(' ');

  const coloredWord = (
    <Heading as="span" color="brand.caramel" textTransform="uppercase">
      {` ${word} `}
    </Heading>
  );

  const newHeading = (
    <Heading>
      {textBegin}
      {coloredWord}
      {textEnd}
    </Heading>
  );

  return newHeading;
};

export { getContent, colorOneHeadingWord };
