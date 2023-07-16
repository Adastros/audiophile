import { Flex, Image, Heading, Text } from '@chakra-ui/react';
import SeeProductButton from '../../shared/SeeProductButton';

const PrimaryProductCards = ({ primaryCardData }) => {
  const imgUrl = primaryCardData.image.mobile.path;
  const imageAlt = primaryCardData.image.alt;
  const backgroundDecorationUrl = primaryCardData.imageDecoration.circle;
  const backgroundDecorationAria = primaryCardData.imageDecoration.aria.hidden;
  const productName = primaryCardData.product;
  const callToAction = primaryCardData.action;

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      backgroundRepeat="no-repeat"
      backgroundPosition="top"
      backgroundColor="orange.500"
    >
      <Image src={imgUrl} alt={imageAlt} />
      <Image
        src={backgroundDecorationUrl}
        alt=""
        aria-hidden={backgroundDecorationAria}
      />
      <Heading as="h3">{productName}</Heading>
      <Text>{callToAction}</Text>
      <SeeProductButton />
    </Flex>
  );
};

export default PrimaryProductCards;
