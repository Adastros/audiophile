import { Box, useMediaQuery } from '@chakra-ui/react';
import MenuIconButton from './MenuIconButton';
import NavLinks from '../NavLinks';

const Navigation = () => {
  const [isLargerThan992] = useMediaQuery('(width >= 992px)');
  const flexDir = { base: 'column', md: 'row' };
  const gaps = { base: '1rem', md: '2.125rem' };

  return (
    <Box>
      {isLargerThan992 ? (
        <NavLinks flexDir={flexDir} gaps={gaps} />
      ) : (
        <MenuIconButton />
      )}
    </Box>
  );
};

export default Navigation;
