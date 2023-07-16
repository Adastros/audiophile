import { Image } from '@chakra-ui/react';

const TertiaryImageCard = ({ tertiaryImgData }) => {
  const imgUrl = tertiaryImgData.mobile.path;
  const imgAlt = tertiaryImgData.alt;

  return <Image src={imgUrl} alt={imgAlt} />;
};

export default TertiaryImageCard;
