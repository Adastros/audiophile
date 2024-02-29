import { Box, useMediaQuery } from '@chakra-ui/react';
import MenuIconButton from './MenuIconButton';
import NavLinks from '../NavLinks';

const Navigation = ({ headerData, menuModal }) => {
  const [isLargerThan992px] = useMediaQuery('(width >= 992px)');
  const flexDir = { base: 'column', md: 'row' };
  const gaps = { base: '1rem', md: '2.125rem' };

  const determineNavigation = () => {
    if (isLargerThan992px) {
      // Close menu when changing navigation elements
      if (menuModal.isMenuModalOpen) {
        menuModal.onMenuModalClose();
      }

      return <NavLinks flexDir={flexDir} gaps={gaps} />;
    } else {
      return <MenuIconButton headerData={headerData} menuModal={menuModal} />;
    }
  };

  return (
    <Box
      position={{ base: 'relative', lg: 'absolute' }}
      top={{ base: '0', lg: 'calc(50% - 12.5px)' }}
      left={{ base: '0', lg: 'calc(50% - 216px)' }}
    >
      {determineNavigation()}
    </Box>
  );
};

export default Navigation;
