import { Box } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';
import ThumbnailBase from './ThumbnailBase';

const SpeakerThumbnail = () => {
  const headerData = useOutletContext()[0];
  const speakerImgData = headerData.header.productCategories.speakers.image;

  return (
    <Box paddingTop="10px">
      <ThumbnailBase imgData={speakerImgData} text={'SPEAKERS'} />
    </Box>
  );
};

export default SpeakerThumbnail;