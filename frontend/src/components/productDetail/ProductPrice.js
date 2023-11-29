import { Text } from '@chakra-ui/react';

const ProductPrice = ({ price }) => {
  return <Text alignSelf="flex-start" textStyle="productPrice">{`$ ${price}`}</Text>;
};

export default ProductPrice;
