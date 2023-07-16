import { Flex, Heading } from '@chakra-ui/react';
import SeeProductButton from '../../shared/SeeProductButton';

const TertiaryLinkCard = ({ productName }) => {
  return (
    <Flex direction="column" align="flex-start">
      <Heading as="h3">{productName}</Heading>
      <SeeProductButton />
    </Flex>
  );
};

export default TertiaryLinkCard;
