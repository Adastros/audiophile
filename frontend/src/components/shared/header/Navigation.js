import { Box, useMediaQuery } from '@chakra-ui/react';
import MenuIconButton from './MenuIconButton';
import NavLinks from '../NavLinks';

const Navigation = ({ headerData, menuModal }) => {
  const [isLargerThan992] = useMediaQuery('(width >= 992px)');
  const flexDir = { base: 'column', md: 'row' };
  const gaps = { base: '1rem', md: '2.125rem' };

  return (
    <Box
      position={{ base: 'relative', lg: 'absolute' }}
      top={{ base: '0', lg: 'calc(50% - 12.5px)' }}
      left={{ base: '0', lg: 'calc(50% - 216px)' }}
    >
      {isLargerThan992 ? (
        <NavLinks flexDir={flexDir} gaps={gaps} />
      ) : (
        <MenuIconButton headerData={headerData} menuModal={menuModal} />
      )}
    </Box>
  );
};

export default Navigation;
