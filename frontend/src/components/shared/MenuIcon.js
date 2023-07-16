import { Image } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';

const MenuIcon = () => {
  const headerData = useOutletContext()[0];
  const hamburgerIconUrl = headerData.header.icon.hamburger.path;

  return <Image src={hamburgerIconUrl} alt="" />;
};

export default MenuIcon;
