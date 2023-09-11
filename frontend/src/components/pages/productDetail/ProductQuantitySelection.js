import { HStack } from '@chakra-ui/react';
import QuantityCounter from '../../shared/QuantityCounter';
import AddToCartButton from './AddToCartButton';

const ProductQuantitySelection = () => {
  return (
    <HStack w="100%" gap="0.5rem" marginTop={{ base: '0', lg: '1rem' }}>
      <QuantityCounter isCart={false} />
      <AddToCartButton
        buttonVariant="seeProductCaramel"
        buttonSize="designMd"
      />
    </HStack>
  );
};

export default ProductQuantitySelection;
