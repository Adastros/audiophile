import { LinkBox, LinkOverlay, Flex, Image, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import SharedHeaderContext from '../../../utils/SharedHeaderContext';
import HandlerContext from '../../../utils/HandlerContext';

const ShopLink = ({ route }) => {
  const rightArrowIconData = useContext(SharedHeaderContext).rightArrowIconData;
  const handleShopLinkClick = useContext(HandlerContext).handleShopLinkClick;

  return (
    <LinkBox className="shopLink" onClick={handleShopLinkClick}>
      <LinkOverlay as={ReactRouterLink} to={route}>
        <Flex zIndex="1" align="center" justify="center" gap="0.5rem">
          <Text opacity="0.5" textStyle="shopLink">
            SHOP
          </Text>
          <Image
            src={rightArrowIconData.path}
            alt=""
            aria-hidden={rightArrowIconData.aria.hidden}
          />
        </Flex>
      </LinkOverlay>
    </LinkBox>
  );
};

export default ShopLink;
