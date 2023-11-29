import { useDispatch } from 'react-redux';
import { HStack, useToast } from '@chakra-ui/react';
import QuantityCounter from '../QuantityCounter';
import AddToCartButton from './AddToCartButton';
import { addToCart } from '../../reducers/cartReducer';

const ProductQuantitySelection = ({ cartKey, quantity, setQuantity }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleButtonClick = () => {
    const newToast = toast({
      title: 'Item added to cart.',
      duration: '5000',
      status: 'success',
      isClosable: true,
      variant: 'addToCartToast',
    });

    dispatch(
      addToCart({
        key: cartKey,
        quantity: quantity,
      })
    );

    return newToast;
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
        handleButtonClick={handleButtonClick}
        buttonVariant="seeProductCaramel"
        buttonSize="designMd"
      />
    </HStack>
  );
};

export default ProductQuantitySelection;
