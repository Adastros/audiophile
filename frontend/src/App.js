import React, { useState } from 'react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Outlet, useLoaderData, ScrollRestoration } from 'react-router-dom';
import { VStack, useDisclosure } from '@chakra-ui/react';
import Header from './components/shared/header/Header';
import MenuOverlay from './components/shared/header/MenuOverlay';
import CartModal from './components/shared/header/CartModal';
import OrderConfirmationModal from './components/orderConfirmationModal/OrderConfirmationModal';
import Footer from './components/shared/footer/Footer';
import SharedHeaderContext from './utils/SharedHeaderContext';
import HandlerContext from './utils/HandlerContext';

function App() {
  const [grandTotal, setGrandTotal] = useState(0);
  const headerClosingFooterData = useLoaderData();
  const headerData = headerClosingFooterData[0];
  const closingData = headerClosingFooterData[1];
  const footerData = headerClosingFooterData[2];

  const {
    isOpen: isCartModalOpen,
    onOpen: onCartModalOpen,
    onClose: onCartModalClose,
  } = useDisclosure();

  const {
    isOpen: isOrderConfirmationModalOpen,
    onOpen: onOrderConfirmationModalOpen,
    onClose: onOrderConfirmationModalClose,
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

  const outletContext = {
    headerData: headerData,
    closingData: closingData,
    setGrandTotal: setGrandTotal,
    onOrderConfirmationModalOpen: onOrderConfirmationModalOpen,
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
          w="100%"
          gap="0"
          position={menuOverlayStyles.pagePosition}
          backgroundColor="brand.seaSalt"
        >
          <MenuOverlay menuDisplay={menuOverlayStyles.menuDisplay} />
          <CartModal
            headerData={headerData}
            isCartModalOpen={isCartModalOpen}
            onCartModalClose={onCartModalClose}
          />
          <OrderConfirmationModal
            headerData={headerData}
            grandTotal={grandTotal}
            isOrderConfirmationModalOpen={isOrderConfirmationModalOpen}
            onOrderConfirmationModalClose={onOrderConfirmationModalClose}
          />
          <Header
            headerData={headerData}
            logoData={logoData}
            onCartModalOpen={onCartModalOpen}
          />
          <Outlet context={outletContext} />
          <Footer footerData={footerData} logoData={logoData} />
        </VStack>
        <ScrollRestoration />
      </HandlerContext.Provider>
    </SharedHeaderContext.Provider>
  );
}

export default App;
