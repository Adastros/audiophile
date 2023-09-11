import { Image } from '@chakra-ui/react';

const CartItemImage = ({ productImage }) => {
  return (
    <Image
      src={productImage.path}
      alt={productImage.alt}
      h="4rem"
      w="4rem"
      borderRadius="0.5rem"
      backgroundColor="brand.antiFlashWhite"
    />
  );
};

export default CartItemImage;
