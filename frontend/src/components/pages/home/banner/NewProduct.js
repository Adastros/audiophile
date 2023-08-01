import { Text } from '@chakra-ui/react';

const NewProduct = ({ isNew, textVariant }) => {
  return isNew ? <Text variant={textVariant}>NEW PRODUCT</Text> : null;
};

export default NewProduct;
