import { Flex, Image, Heading, Text } from '@chakra-ui/react';
import SeeProductButton from '../../shared/SeeProductButton';

const PrimaryProductCards = ({ primaryCardData }) => {
  const imgUrl = primaryCardData.image.mobile.path;
  const imageAlt = primaryCardData.image.alt;
  const backgroundDecorationUrl = primaryCardData.imageDecoration.circle.path;
  const productName = primaryCardData.product;
  const callToAction = primaryCardData.action;

  return (
    <Flex
      h="600px"
      w="327px"
      direction="column"
      align="center"
      color="brand.white"
      borderRadius="8px"
      backgroundImage={`url(${backgroundDecorationUrl})`}
      backgroundSize="558px 558px"
      backgroundRepeat="no-repeat"
      backgroundPosition="top -120px center"
      backgroundColor="brand.caramel"
    >
      <Image
        src={imgUrl}
        alt={imageAlt}
        h="auto"
        w="166px"
        marginTop="55px"
        marginBottom="40px"
      />
      <Heading
        as="h3"
        width="200px"
        marginBottom="27px"
        fontSize="36px"
        fontWeight="bold"
        lineHeight="40px"
        letterSpacing="1.286px"
        textAlign="center"
        textTransform="uppercase"
      >
        {productName}
      </Heading>
      <Text
        px="24px"
        paddingBottom="24px"
        fontSize="design.body"
        textAlign="center"
      >
        {callToAction}
      </Text>
      <SeeProductButton
        buttonVariant={'seeProductBlack'}
        buttonSize={'brandMd'}
      />
    </Flex>
  );
};

export default PrimaryProductCards;
