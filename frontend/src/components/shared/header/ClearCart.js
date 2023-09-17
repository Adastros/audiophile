import { useDispatch } from 'react-redux';
import { clearCart } from '../../../reducers/cartReducer';
import { Text } from '@chakra-ui/react';

const ClearCart = () => {
  const dispatch = useDispatch();

  const handleTextClick = () => {
    dispatch(clearCart());
  };

  return (
    <Text
      textStyle="feature"
      textDecorationLine="underline"
      _hover={{ color: 'brand.caramel' }}
      onClick={handleTextClick}
    >
      Remove All
    </Text>
  );
};

export default ClearCart;
