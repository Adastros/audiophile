import { VStack, Text } from '@chakra-ui/react';

const GrandTotal = ({ positionGrandPrice, grandTotalStr }) => {
  return (
    <VStack
      minH="5.75rem"
      w={{ base: '100%', md: '12.375rem' }}
      paddingTop={{ base: '0', md: '2.5rem' }}
      paddingBottom={{ base: '0', md: '2.5rem' }}
      paddingX="1.5rem"
      align="flex-start"
      justify={{ base: 'center', md: positionGrandPrice }}
      gap="0.5rem"
      backgroundColor="black"
      borderTopRightRadius={{ base: '0', md: 'inherit' }}
      borderBottomRightRadius="inherit"
      borderBottomLeftRadius={{ base: 'inherit', md: '0' }}
    >
      <Text color="white" textStyle="feature">
        Grand Total
      </Text>
      <Text
        color="white"
        textStyle="orderConfirmGrandTotalPrice"
      >{`$${grandTotalStr}`}</Text>
    </VStack>
  );
};

export default GrandTotal;
