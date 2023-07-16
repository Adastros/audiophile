import { Image, Flex, Heading } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';
import ShopLink from './ShopLink';

const SpeakerThumbnail = () => {
  const headerData = useOutletContext()[0];
  const speakerImgData = headerData.header.productCategories.speakers.image;

  return (
    <Flex direction="column" align="center">
      <Image src={speakerImgData.shared.path} alt={speakerImgData.alt} />
      <Heading as="h3" size="md">
        SPEAKERS
      </Heading>
      <ShopLink />
    </Flex>
  );
};

export default SpeakerThumbnail;
