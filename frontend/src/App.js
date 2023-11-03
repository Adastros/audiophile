import React from 'react';
import { Outlet, useLoaderData, ScrollRestoration } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { VStack, useDisclosure } from '@chakra-ui/react';
import Header from './components/shared/header/Header';
import MenuModal from './components/shared/header/MenuModal';
import CartModal from './components/shared/header/CartModal';
import OrderConfirmationModal from './components/orderConfirmationModal/OrderConfirmationModal';
import Footer from './components/shared/footer/Footer';
import SharedHeaderContext from './utils/SharedHeaderContext';
import { calcTotalCost, calcVatCost, calcGrandTotal } from './utils/helper';

function App() {
  const headerClosingFooterData = useLoaderData();
  const cart = useSelector(state => state.cart);
  const headerData = headerClosingFooterData[0];
  const closingData = headerClosingFooterData[1];
  const footerData = headerClosingFooterData[2];
  const totalCost = calcTotalCost(cart, headerData.cart);
  const vatCost = calcVatCost(totalCost);
  const grandTotal = calcGrandTotal(totalCost, vatCost);

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

  const {
    isOpen: isMenuModalOpen,
    onOpen: onMenuModalOpen,
    onClose: onMenuModalClose,
  } = useDisclosure();

  const menuModal = {
    isMenuModalOpen,
    onMenuModalOpen,
    onMenuModalClose,
  };

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
    headerData,
    closingData,
    totalCost,
    vatCost,
    grandTotal,
    onOrderConfirmationModalOpen,
  };

  return (
    <SharedHeaderContext.Provider value={sharedHeaderData}>
      <VStack minH="100vh" w="100%" gap="0" backgroundColor="brand.seaSalt">
        <MenuModal menuModal={menuModal} />
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
          menuModal={menuModal}
        />
        <Outlet context={outletContext} />
        <Footer footerData={footerData} logoData={logoData} />
      </VStack>
      <ScrollRestoration />
    </SharedHeaderContext.Provider>
  );
}

export default App;
