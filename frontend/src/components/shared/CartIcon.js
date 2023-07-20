import { Image } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';

const CartIcon = () => {
  const headerData = useOutletContext()[0];
  const cartIconUrl = headerData.header.icon.cart.path;

  return <Image src={cartIconUrl} alt="" backgroundColor="brand.black" />;
};

export default CartIcon;
