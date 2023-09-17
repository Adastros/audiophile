import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { HStack } from '@chakra-ui/react';
import QuantityCounter from '../../shared/QuantityCounter';
import AddToCartButton from './AddToCartButton';
import { addToCart } from '../../../reducers/cartReducer';

const ProductQuantitySelection = ({ cartKey }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleButtonCLick = () => {
    dispatch(
      addToCart({
        key: cartKey,
        quantity: quantity,
      })
    );
  };

  const handlePlusButtonClick = () => {
    if (quantity < 100) setQuantity(quantity + 1);
  };

  const handleMinusButtonClick = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <HStack w="100%" gap="0.5rem" marginTop={{ base: '0', lg: '1rem' }}>
      <QuantityCounter
        isCart={false}
        quantity={quantity}
        handlePlusButtonClick={handlePlusButtonClick}
        handleMinusButtonClick={handleMinusButtonClick}
      />
      <AddToCartButton
        handleButtonCLick={handleButtonCLick}
        buttonVariant="seeProductCaramel"
        buttonSize="designMd"
      />
    </HStack>
  );
};

export default ProductQuantitySelection;
