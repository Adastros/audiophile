import { Box } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';
import ThumbnailBase from './ThumbnailBase';

const SpeakerThumbnail = () => {
  const headerData = useOutletContext()[0];
  const speakerImgData = headerData.productCategories.speakers.image;

  return (
    <Box paddingTop="10px">
      <ThumbnailBase route={'/speakers'} imgData={speakerImgData} text={'SPEAKERS'} />
    </Box>
  );
};

export default SpeakerThumbnail;
