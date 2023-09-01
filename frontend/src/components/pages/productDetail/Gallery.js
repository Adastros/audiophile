import { Grid, GridItem } from '@chakra-ui/react';
import Picture from '../../shared/Picture';

const Gallery = ({ galleryImages }) => {
  const imgData1 = galleryImages.image1;
  const imgData2 = galleryImages.image2;
  const imgData3 = galleryImages.image3;

  return (
    <Grid
      w={{ base: '20.4375rem', md: '43.0625rem', lg: '100%' }}
      maxW="69.375rem"
      templateAreas={{
        base: `"image1"
               "image2"
               "image3"`,
        md: `"image1 image3"
             "image2 image3"`,
      }}
      templateColumns={{ base: '1fr', md: '1.56fr 2.2fr', lg: '0.7fr 1fr' }}
      templateRows={{
        base: '1fr 1fr 2fr',
        md: 'repeat(2, 1fr)',
      }}
      rowGap={{ base: '0.5rem', md: '1rem', lg: '1.75rem' }}
      columnGap={{ base: '0.5rem', md: '1rem', lg: '1.85rem' }}
    >
      <GridItem area={'image1'} borderRadius="0.5rem">
        <Picture imgData={imgData1} />
      </GridItem>
      <GridItem area={'image2'} borderRadius="0.5rem">
        <Picture imgData={imgData2} />
      </GridItem>
      <GridItem area={'image3'} borderRadius="0.5rem">
        <Picture imgData={imgData3} />
      </GridItem>
    </Grid>
  );
};

export default Gallery;
