import { useOutletContext } from 'react-router-dom';
import ThumbnailBase from './ThumbnailBase';

const HeadphoneThumbnail = () => {
  const headerData = useOutletContext()[0];
  const headphoneImgData = headerData.productCategories.headphones.image;

  return (
    <ThumbnailBase
      route={'/headphones'}
      imgData={headphoneImgData}
      text={'HEADPHONES'}
      padTop="0"
    />
  );
};

export default HeadphoneThumbnail;
