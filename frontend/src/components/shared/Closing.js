import { Flex, Image, Heading, Text } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';

const Closing = () => {
  const closingData = useOutletContext()[1];
  const imgUrl = closingData.closing.image.mobile.path;
  const imgAlt = closingData.closing.image.alt;
  const headline = closingData.closing.headline;
  const callToAction = closingData.closing.action;

  return (
    <Flex direction="column" align="center">
      <Image src={imgUrl} alt={imgAlt} />
      <Heading>{headline}</Heading>
      <Text>{callToAction}</Text>
    </Flex>
  );
};

export default Closing;
