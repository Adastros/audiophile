import { Image, Flex, Heading } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';
import ShopLink from './ShopLink';

const EarphoneThumbnail = () => {
  const headerData = useOutletContext()[0];
  const earphoneImgData = headerData.header.productCategories.earphones.image;

  return (
    <Flex direction="column" align="center">
      <Image src={earphoneImgData.shared.path} alt={earphoneImgData.alt} />
      <Heading as="h3" size="md">
        EARPHONES
      </Heading>
      <ShopLink />
    </Flex>
  );
};

export default EarphoneThumbnail;
