import { useDispatch } from 'react-redux';
import { Text } from '@chakra-ui/react';
import { clearCart } from '../../reducers/cartReducer';
import { clearDatabaseCart } from '../../utils/requests';

const ClearCart = () => {
  const dispatch = useDispatch();

  const handleTextClick = () => {
    const cartId = localStorage.getItem('cartId');

    clearDatabaseCart(cartId);
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
