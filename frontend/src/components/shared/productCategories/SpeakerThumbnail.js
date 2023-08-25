import { useOutletContext } from 'react-router-dom';
import ThumbnailBase from './ThumbnailBase';

const SpeakerThumbnail = () => {
  const headerData = useOutletContext()[0];
  const speakerImgData = headerData.productCategories.speakers.image;

  return (
    <ThumbnailBase
      route={'/speakers'}
      imgData={speakerImgData}
      text={'SPEAKERS'}
      padTop="0"
    />
  );
};

export default SpeakerThumbnail;
