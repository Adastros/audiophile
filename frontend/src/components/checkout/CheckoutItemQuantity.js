import { Text } from '@chakra-ui/react';

const CheckoutItemQuantity = ({ quantity }) => {
  return (
    <Text
      alignSelf="flex-start"
      opacity="0.5"
      textStyle="inTheBoxQuantity"
    >{`x${quantity}`}</Text>
  );
};

export default CheckoutItemQuantity;
