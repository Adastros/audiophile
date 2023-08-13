import { Box, Image } from '@chakra-ui/react';

const TertiaryImageCard = ({ imgData }) => {
  const imgUrl = imgData.mobile.path;
  const imgAlt = imgData.alt;

  return (
    <Box h="200px" w="327px">
      <Image src={imgUrl} alt={imgAlt} borderRadius="8px" />
    </Box>
  );
};

export default TertiaryImageCard;
