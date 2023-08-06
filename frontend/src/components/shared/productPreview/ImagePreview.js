import { Image, Box } from '@chakra-ui/react';

const ImagePreview = ({ productImgData }) => {
  const imgUrlDesktop = productImgData.desktop.path;
  const imgUrlTablet = productImgData.tablet.path;
  const imgUrlMobile = productImgData.mobile.path;
  const imgAlt = productImgData.alt;

  // sizes={`(768px <= width < 992px) 689px, (width >= 992px) 540px, 327px`}
  // srcSet={`${imgUrlMobile} 327w, ${imgUrlTablet} 689w, ${imgUrlDesktop} 560w`}
  return (
    <Box
      h={{ base: '352px', md: '352px', lg: '560px' }}
      w={{ base: '327px', md: '689px', lg: '540px' }}
      marginBottom="32px"
      borderRadius="8px"
      backgroundColor="brand.antiFlashWhite"
    >
      <picture>
        <source media="(768px <= width < 992px)" srcSet={imgUrlTablet} />
        <source media="(width >= 992px)" srcSet={imgUrlDesktop} />
        <Image src={imgUrlMobile} alt={imgAlt} borderRadius="8px" />
      </picture>
    </Box>
  );
};

export default ImagePreview;
