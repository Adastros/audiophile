import { Flex, Image, Text } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';

const ShopLink = () => {
  const headerData = useOutletContext()[0];
  const rightArrowIconData = headerData.header.icon.rightArrow;

  return (
    <Flex align="center">
      <Text>SHOP</Text>
      <Image
        src={rightArrowIconData.path}
        alt=""
        aria-hidden={rightArrowIconData.aria.hidden}
      />
    </Flex>
  );
};

export default ShopLink;
