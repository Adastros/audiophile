import { Flex, Image, Box, Text } from '@chakra-ui/react';
import SeeProductButton from '../../shared/SeeProductButton';

const RecommendedProduct = ({ product, route }) => {
  const name = product.name;
  const imageUrlDesktop = product.image.desktop.path;
  const imageUrlTablet = product.image.tablet.path;
  const imageUrlMobile = product.image.mobile.path;
  const imageAlt = product.image.alt;

  return (
    <Flex
      marginBottom="56px"
      direction="column"
      align="center"
      gap="32px"
      position="relative"
    >
      <Box zIndex="1" backgroundColor="brand.antiFlashWhite">
        <picture>
          <source media="(768px <= width < 992px)" srcSet={imageUrlTablet} />
          <source media="(width >= 992px)" srcSet={imageUrlDesktop} />
          <Image src={imageUrlMobile} alt={imageAlt} />
        </picture>
      </Box>
      <Text textStyle="recommend">{name}</Text>
      <SeeProductButton
        buttonVariant="seeProductCaramel"
        buttonSize="designMd"
        route={route}
      />
    </Flex>
  );
};

export default RecommendedProduct;
