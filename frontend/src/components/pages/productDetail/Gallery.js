import { Image, Grid, GridItem } from '@chakra-ui/react';

const Gallery = ({ galleryImages }) => {
  const image1 = galleryImages.image1;
  const image2 = galleryImages.image2;
  const image3 = galleryImages.image3;

  const image1Desktop = image1.desktop.path;
  const image1Tablet = image1.tablet.path;
  const image1Mobile = image1.mobile.path;
  const image1Alt = image1.alt;

  const image2Desktop = image2.desktop.path;
  const image2Tablet = image2.tablet.path;
  const image2Mobile = image2.mobile.path;
  const image2Alt = image2.alt;

  const image3Desktop = image3.desktop.path;
  const image3Tablet = image3.tablet.path;
  const image3Mobile = image3.mobile.path;
  const image3Alt = image3.alt;

  return (
    <Grid
      w={{ base: '327px', md: '691px', lg: '1110px' }}
      templateAreas={{
        base: `"image1"
               "image2"
               "image3"`,
        md: `"image1 image3"
             "image2 image3"`,
      }}
      templateColumns={{ base: '1fr', md: '1.5fr 2.2fr', lg: '1.55fr 2.2fr' }}
      templateRows={{
        base: '1fr 1fr 2fr',
        md: 'repeat(2, 1fr)',
      }}
      gap={{ base: '12px', md: '30px' }}
    >
      <GridItem area={'image1'}>
        <picture>
          <source media="(768px <= width < 992px)" srcSet={image1Tablet} />
          <source media="(width >= 992px)" srcSet={image1Desktop} />
          <Image src={image1Mobile} alt={image1Alt} borderRadius="8px" />
        </picture>
      </GridItem>
      <GridItem area={'image2'}>
        <picture>
          <source media="(768px <= width < 992px)" srcSet={image2Tablet} />
          <source media="(width >= 992px)" srcSet={image2Desktop} />
          <Image src={image2Mobile} alt={image2Alt} borderRadius="8px" />
        </picture>
      </GridItem>
      <GridItem area={'image3'}>
        <picture>
          <source media="(768px <= width < 992px)" srcSet={image3Tablet} />
          <source media="(width >= 992px)" srcSet={image3Desktop} />
          <Image src={image3Mobile} alt={image3Alt} borderRadius="8px" />
        </picture>
      </GridItem>
    </Grid>
  );

  //   return (
  //     <Flex direction={{ base: 'column', md: 'row', lg: 'column' }} gap="16px">
  //       <VStack direction='column' gap="16px">
  //         <picture>
  //           <source media="(768px <= width < 992px)" srcSet={image1Tablet} />
  //           <source media="(width >= 992px)" srcSet={image1Desktop} />
  //           <Image src={image1Mobile} alt={image1Alt} borderRadius="8px" />
  //         </picture>
  //         <picture>
  //           <source media="(768px <= width < 992px)" srcSet={image2Tablet} />
  //           <source media="(width >= 992px)" srcSet={image2Desktop} />
  //           <Image src={image2Mobile} alt={image2Alt} borderRadius="8px" />
  //         </picture>
  //       </VStack>
  //       <picture>
  //         <source media="(768px <= width < 992px)" srcSet={image3Tablet} />
  //         <source media="(width >= 992px)" srcSet={image3Desktop} />
  //         <Image src={image3Mobile} alt={image3Alt} borderRadius="8px" />
  //       </picture>
  //     </Flex>
  //   );
};

export default Gallery;
