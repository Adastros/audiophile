import { Flex, Image, Heading, Text } from '@chakra-ui/react';
import SeeProductButton from '../../../shared/SeeProductButton';
import headingStyles from '../../../../theme/headingStyles';

const PrimaryProductCards = ({ primaryCardData }) => {
  const imgUrl = primaryCardData.image.mobile.path;
  const imageAlt = primaryCardData.image.alt;
  const backgroundDecorationUrl = primaryCardData.imageDecoration.circle.path;
  const productName = primaryCardData.product;
  const callToAction = primaryCardData.action;
  const productDetailPageRoute = primaryCardData.route;

  return (
    <Flex
      id="primary-product-card"
      h="600px"
      w="327px"
      direction="column"
      align="center"
      color="white"
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
        textAlign="center"
        {...headingStyles.lgHeading}
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
        buttonVariant='seeProductBlack'
        buttonSize='designMd'
        route={productDetailPageRoute}
      />
    </Flex>
  );
};

export default PrimaryProductCards;
