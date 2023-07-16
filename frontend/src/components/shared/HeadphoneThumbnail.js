import { Image, Flex, Heading } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';
import ShopLink from './ShopLink';

const HeadphoneThumbnail = () => {
  const headerData = useOutletContext()[0];
  const headphoneImgData =
    headerData.header.productCategories.headphones.image;

  return (
    <Flex direction="column" align="center">
      <Image src={headphoneImgData.shared.path} alt={headphoneImgData.alt} />
      <Heading as="h3" size="md">
        HEADPHONES
      </Heading>
      <ShopLink />
    </Flex>
  );
};

export default HeadphoneThumbnail;
