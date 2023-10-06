import { VStack, Center } from '@chakra-ui/react';
import OrderConfirmationAccordion from './OrderConfirmationAccordian';

const ItemList = ({
  lineItems,
  numOfItemsToDisplay,
  displayOrHideItemList,
}) => {
  return (
    <VStack
      padding="1.5rem"
      flex="1"
      gap="0"
      backgroundColor="brand.antiFlashWhite"
      borderTopLeftRadius="inherit"
      borderTopRightRadius={{ base: 'inherit', md: '0' }}
      borderBottomLeftRadius={{ base: '0', md: 'inherit' }}
    >
      <Center h="100%" w="100%">
        {lineItems[0]}
      </Center>
      <OrderConfirmationAccordion
        lineItems={lineItems}
        numOfItemsToDisplay={numOfItemsToDisplay}
        displayOrHideItemList={displayOrHideItemList}
      />
    </VStack>
  );
};

export default ItemList;
