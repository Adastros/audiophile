import React, { useState } from 'react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Outlet, useLoaderData, ScrollRestoration } from 'react-router-dom';
import { VStack, useDisclosure } from '@chakra-ui/react';
import Header from './components/shared/header/Header';
import MenuOverlay from './components/shared/header/MenuOverlay';
import CartModal from './components/shared/header/CartModal';
import Closing from './components/shared/closing/Closing';
import Footer from './components/shared/footer/Footer';
import SharedHeaderContext from './utils/SharedHeaderContext';
import HandlerContext from './utils/HandlerContext';

function App() {
  const headerClosingFooterData = useLoaderData();
  const {
    isOpen: isCartModalOpen,
    onOpen: onCartModalOpen,
    onClose: onCartModalClose,
  } = useDisclosure();
  const [menuOverlayStyles, setMenuOverlayStyles] = useState({
    menuDisplay: 'none',
    pagePosition: 'relative',
  });
  const logoData = {
    logoImg: headerClosingFooterData[0].image.logo.path,
    logoAlt: headerClosingFooterData[0].image.logo.alt,
    logoHomeRoute: headerClosingFooterData[0].route.home,
  };
  const sharedHeaderData = {
    productCategories: headerClosingFooterData[0].productCategories,
    rightArrowIconData: headerClosingFooterData[0].icon.rightArrow,
  };

  const handlers = {
    handleMenuClick: () => {
      if (menuOverlayStyles.menuDisplay === 'none') {
        setMenuOverlayStyles({ menuDisplay: 'block', pagePosition: 'fixed' });
      } else {
        setMenuOverlayStyles({
          menuDisplay: 'none',
          pagePosition: 'relative',
        });
      }
    },
    handleShopLinkClick: () => {
      setMenuOverlayStyles({ menuDisplay: 'none', pagePosition: 'relative' });
    },
  };

  return (
    <SharedHeaderContext.Provider value={sharedHeaderData}>
      <HandlerContext.Provider value={handlers}>
        <VStack
          h="100%"
          w="100%" // Due to react-remove-scroll bug adding margin-right: 15px to body tag. See https://github.com/chakra-ui/chakra-ui/pull/6155.
          gap="0"
          position={menuOverlayStyles.pagePosition}
          backgroundColor="brand.seaSalt"
        >
          <MenuOverlay menuDisplay={menuOverlayStyles.menuDisplay} />
          <CartModal
            isCartModalOpen={isCartModalOpen}
            onCartModalClose={onCartModalClose}
            headerData={headerClosingFooterData[0]}
          />
          <Header
            headerData={headerClosingFooterData[0]}
            logoData={logoData}
            onCartModalOpen={onCartModalOpen}
          />
          <Outlet />
          <Closing closingData={headerClosingFooterData[1]} />
          <Footer footerData={headerClosingFooterData[2]} logoData={logoData} />
        </VStack>
        <ScrollRestoration />
      </HandlerContext.Provider>
    </SharedHeaderContext.Provider>
  );
}

export default App;
