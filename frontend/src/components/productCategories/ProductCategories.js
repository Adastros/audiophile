import { useContext } from 'react';
import { Flex } from '@chakra-ui/react';
import ThumbnailBase from './ThumbnailBase';
import SharedHeaderContext from '../../utils/SharedHeaderContext';

const ProductCategories = ({ menuModal }) => {
  const productCategories = useContext(SharedHeaderContext).productCategories;
  const earphonePadTop = { base: '0.75rem', md: '0.5rem' };

  const thumbnails = () => {
    return Object.keys(productCategories).map(key => {
      let imgData = productCategories[key].image;
      let route = productCategories[key].route;

      return (
        <ThumbnailBase
          key={`${key}Thumbnail`}
          route={route}
          imgData={imgData}
          text={key}
          padTop={key === 'earphones' ? earphonePadTop : '0'}
          menuModal={menuModal}
        />
      );
    });
  };

  return (
    <Flex
      as="nav"
      h={{ base: '100%', md: '217px', lg: '284px' }}
      w="100%"
      maxW={{ base: '100%', md: '43.0625rem', lg: '69.375rem' }}
      position="relative"
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify={{ base: 'center', md: 'space-between' }}
      backgroundColor="inherit"
      gap={{ base: '2rem', md: '0.625rem', lg: '1rem' }}
      data-cy="product-categories"
    >
      {thumbnails()}
    </Flex>
  );
};

export default ProductCategories;
