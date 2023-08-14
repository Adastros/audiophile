import { useOutletContext } from 'react-router-dom';
import ThumbnailBase from './ThumbnailBase';

const EarphoneThumbnail = () => {
  const headerData = useOutletContext()[0];
  const earphoneImgData = headerData.productCategories.earphones.image;

  return (
    <ThumbnailBase
      redirectUrl={'/earphones'}
      imgData={earphoneImgData}
      text={'EARPHONES'}
      padTop={'12px'}
    />
  );
};

export default EarphoneThumbnail;
