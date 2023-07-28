import { Text } from '@chakra-ui/react';

const NewProduct = ({ isNew, textVariant }) => {
  return isNew ? <Text variant={textVariant}>New Product</Text> : null;
};

export default NewProduct;
