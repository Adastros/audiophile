import { Heading, Text, VStack, Flex } from '@chakra-ui/react';
import headingStyles from '../../../theme/headingStyles';

const InTheBox = ({ items }) => {
  const listItemsInBox = () => {
    return Object.keys(items).map(item => {
      return (
        <Flex
          key={items[item].name}
          align="center"
          justify="flex-start"
          gap="24px"
        >
          <Text
            color="brand.caramel"
            textStyle="inTheBoxQuantity"
          >{`${items[item].quantity}x`}</Text>
          <Text textStyle="feature">{items[item].name}</Text>
        </Flex>
      );
    });
  };

  return (
    <Flex
      direction={{ base: 'column', md: 'row', lg: 'column' }}
      align="flex-start"
    >
      <Heading
        w={{ base: '327px', md: 'row', lg: '350px' }}
        marginBottom="24px"
        {...headingStyles.productDetailSection}
      >
        IN THE BOX
      </Heading>
      <VStack align="flex-start" gap="8px">
        {listItemsInBox()}
      </VStack>
    </Flex>
  );
};

export default InTheBox;
