import { Image, Box } from '@chakra-ui/react';

const ImageDetail = ({ productImgData }) => {
  const imgUrlDesktop = productImgData.desktop.path;
  const imgUrlTablet = productImgData.tablet.path;
  const imgUrlMobile = productImgData.mobile.path;
  const imgAlt = productImgData.alt;

  return (
    <Box
      h={{ base: '327px', md: '480px', lg: '560px' }}
      w={{ base: '327px', md: '281px', lg: '540px' }}
      marginBottom="8px"
      backgroundColor="brand.antiFlashWhite"
    >
      <picture>
        <source media="(768px <= width < 992px)" srcSet={imgUrlTablet} />
        <source media="(width >= 992px)" srcSet={imgUrlDesktop} />
        <Image src={imgUrlMobile} alt={imgAlt} />
      </picture>
    </Box>
  );
};

export default ImageDetail;
