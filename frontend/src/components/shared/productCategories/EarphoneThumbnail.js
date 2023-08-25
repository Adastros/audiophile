import { useOutletContext } from 'react-router-dom';
import ThumbnailBase from './ThumbnailBase';

const EarphoneThumbnail = () => {
  const headerData = useOutletContext()[0];
  const earphoneImgData = headerData.productCategories.earphones.image;

  return (
    <ThumbnailBase
      route={'/earphones'}
      imgData={earphoneImgData}
      text={'EARPHONES'}
      padTop={{ base: '0.75rem', md: '0.5rem' }}
    />
  );
};

export default EarphoneThumbnail;
