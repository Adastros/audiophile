import { Flex, Heading } from '@chakra-ui/react';
import SeeProductButton from '../../../shared/SeeProductButton';

const TertiaryLinkCard = ({ productName, route }) => {
  return (
    <Flex
      h="200px"
      w="327px"
      paddingLeft="24px"
      direction="column"
      align="flex-start"
      justify="center"
      gap="32px"
      borderRadius="8px"
      backgroundColor="brand.antiFlashWhite"
    >
      <Heading
        as="h3"
        fontSize="design.h4"
        fontWeight="bold"
        lineHeight="normal"
        letterSpacing="design.h1"
        textTransform="uppercase"
      >
        {productName}
      </Heading>
      <SeeProductButton
        buttonVariant="seeProductWhite"
        buttonSize="designMd"
        route={route}
      />
    </Flex>
  );
};

export default TertiaryLinkCard;
