import { Box, Image } from '@chakra-ui/react';

const TertiaryImageCard = ({ tertiaryImgData }) => {
  const imgUrl = tertiaryImgData.mobile.path;
  const imgAlt = tertiaryImgData.alt;

  return (
    <Box h="200px" w="327px">
      <Image src={imgUrl} alt={imgAlt} borderRadius="8px"/>
    </Box>
  );
};

export default TertiaryImageCard;
