import { Box, Image } from '@chakra-ui/react';

const Picture = ({ imgData }) => {
  const imgUrlDesktop = imgData.desktop.path;
  const imgUrlTablet = imgData.tablet.path;
  const imgUrlMobile = imgData.mobile.path;
  const imgAlt = imgData.alt;

  return (
    <Box as="picture" borderRadius="inherit">
      <source media="(48em <= width < 62em)" srcSet={imgUrlTablet} />
      <source media="(width >= 62em)" srcSet={imgUrlDesktop} />
      <Image src={imgUrlMobile} alt={imgAlt} borderRadius="inherit"/>
    </Box>
  );
};

export default Picture;
