import { Image } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';

const Logo = () => {
  const headerData = useOutletContext()[0];
  const logoImg = headerData.header.image.logo.path;
  const logoAlt = headerData.header.image.alt;

  return (
    <Image
      id="logo"
      src={logoImg}
      alt={logoAlt}
      h="25px"
      w="143px"
      flexShrink="0"
    />
  );
};

export default Logo;
