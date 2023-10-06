import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Center,
  Divider,
  Heading,
  Text,
} from '@chakra-ui/react';

const OrderConfirmationAccordion = ({
  lineItems,
  numOfItemsToDisplay,
  displayOrHideItemList,
}) => {
  return (
    <Box w="100%" display={displayOrHideItemList}>
      <Accordion allowToggle variant="orderConfirmation">
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <AccordionPanel>{lineItems.slice(1)}</AccordionPanel>
              <Center h="min-content" w="100%">
                <Divider
                  marginTop="0.75rem"
                  marginBottom="0.75rem"
                  marginX="0"
                  orientation="horizontal"
                  borderColor="black"
                  opacity="0.08"
                />
              </Center>
              <Heading as="h3">
                <AccordionButton>
                  <Text flex="1" textStyle="orderConfirmMoreItems">
                    {isExpanded
                      ? 'View less'
                      : `and ${numOfItemsToDisplay} other item(s)`}
                  </Text>
                </AccordionButton>
              </Heading>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default OrderConfirmationAccordion;
