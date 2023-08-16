import { LinkBox, LinkOverlay, Flex, Image, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Link as ReactRouterLink } from 'react-router-dom';
import HandlerContext from '../../../utils/HandlerContext';

const ShopLink = ({ route }) => {
  const headerData = useOutletContext()[0];
  const handleShopLinkClick = useContext(HandlerContext).handleShopLinkClick;
  const rightArrowIconData = headerData.icon.rightArrow;

  return (
    <LinkBox className="shopLink" onClick={handleShopLinkClick}>
      <LinkOverlay as={ReactRouterLink} to={route}>
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
      </LinkOverlay>
    </LinkBox>
  );
};

export default ShopLink;
