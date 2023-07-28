import { useOutletContext } from 'react-router-dom';
import ThumbnailBase from './ThumbnailBase';

const EarphoneThumbnail = () => {
  const headerData = useOutletContext()[0];
  const earphoneImgData = headerData.header.productCategories.earphones.image;

  return (
    <ThumbnailBase
      imgData={earphoneImgData}
      text={'EARPHONES'}
      padTop={'12px'}
    />
  );
};

export default EarphoneThumbnail;
