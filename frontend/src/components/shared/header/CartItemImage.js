import { Image } from '@chakra-ui/react';

const CartItemImage = ({ productImage, size }) => {
  return (
    <Image
      src={productImage.path}
      alt={productImage.alt}
      h={size.height}
      w={size.width}
      borderRadius="0.5rem"
      backgroundColor="brand.antiFlashWhite"
    />
  );
};

export default CartItemImage;
