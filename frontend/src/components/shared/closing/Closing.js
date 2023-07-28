import { Flex } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';
import ClosingImage from './ClosingImage';
import ClosingHeadline from './ClosingHeadline';
import ClosingParagraph from './ClosingParagraph';

const Closing = () => {
  const closingData = useOutletContext()[1];
  const imgUrl = closingData.closing.image.mobile.path;
  const imgAlt = closingData.closing.image.alt;
  const headline = closingData.closing.headline;
  const callToAction = closingData.closing.action;

  return (
    <Flex
      paddingTop="32px"
      paddingBottom="92px"
      direction="column"
      align="center"
      gap="32px"
    >
      <ClosingImage imgUrl={imgUrl} imgAlt={imgAlt} />
      <ClosingHeadline headline={headline} />
      <ClosingParagraph callToAction={callToAction} />
    </Flex>
  );
};

export default Closing;
