import { Flex, Image, Text } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';
import ClosingHeadline from './ClosingHeadline';

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
      <Image src={imgUrl} alt={imgAlt} h="auto" w="327px" borderRadius="8px" />
      <ClosingHeadline headline={headline} />
      <Text
        w="327px"
        fontSize="design.body"
        fontWeight="500"
        lineHeight="design.body"
        letterSpacing="normal"
        textAlign="center"
        opacity="0.5"
      >
        {callToAction}
      </Text>
    </Flex>
  );
};

export default Closing;
