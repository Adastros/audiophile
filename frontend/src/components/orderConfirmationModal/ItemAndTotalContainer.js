import { Flex } from '@chakra-ui/react';
import ItemList from './ItemList';
import GrandTotal from './GrandTotal';

const ItemAndTotalContainer = ({
  lineItems,
  numOfItemsToDisplay,
  displayOrHideItemList,
  positionGrandPrice,
  grandTotalStr,
}) => {
  return (
    <Flex
      h="100%"
      w="100%"
      direction={{ base: 'column', md: 'row' }}
      borderRadius="0.5rem"
    >
      <ItemList
        lineItems={lineItems}
        numOfItemsToDisplay={numOfItemsToDisplay}
        displayOrHideItemList={displayOrHideItemList}
      />
      <GrandTotal
        positionGrandPrice={positionGrandPrice}
        grandTotalStr={grandTotalStr}
      />
    </Flex>
  );
};

export default ItemAndTotalContainer;
