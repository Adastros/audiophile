import { Flex, Image, Text } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';

const ShopLink = () => {
  const headerData = useOutletContext()[0];
  const rightArrowIconData = headerData.header.icon.rightArrow;

  return (
    <Flex zIndex="1" align="center" justify="center" gap="0.5rem">
      <Text
        fontSize="design.subtitle"
        fontWeight="bold"
        lineHeight="normal"
        letterSpacing="design.subtitle"
        textTransform="uppercase"
        opacity="0.5"
      >
        SHOP
      </Text>
      <Image
        src={rightArrowIconData.path}
        alt=""
        aria-hidden={rightArrowIconData.aria.hidden}
      />
    </Flex>
  );
};

export default ShopLink;
