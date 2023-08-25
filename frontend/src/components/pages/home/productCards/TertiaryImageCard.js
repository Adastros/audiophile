import { Box } from '@chakra-ui/react';

const TertiaryImageCard = ({ imgData }) => {
  const imageUrl = {
    desktop: imgData.desktop.path,
    tablet: imgData.tablet.path,
    mobile: imgData.mobile.path,
  };

  return (
    <Box
      h={{ base: '12.5rem', md: '20rem' }}
      w="100%"
      borderRadius="0.5rem"
      backgroundImage={{
        base: `${imageUrl.mobile}`,
        md: `${imageUrl.tablet}`,
        lg: `${imageUrl.desktop}`,
      }}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundColor="brand.antiFlashWhite"
    />
  );
};

export default TertiaryImageCard;
