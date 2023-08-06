import { useOutletContext } from 'react-router-dom';
import ThumbnailBase from './ThumbnailBase';

const HeadphoneThumbnail = () => {
  const headerData = useOutletContext()[0];
  const headphoneImgData = headerData.header.productCategories.headphones.image;

  return <ThumbnailBase redirectUrl={'/headphones'} imgData={headphoneImgData} text={'HEADPHONES'} />;
};

export default HeadphoneThumbnail;
