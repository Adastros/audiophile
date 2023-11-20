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
  const headerClosingFooterDemoData = useLoaderData();
  const cart = useSelector(state => state.cart);
  const headerData = headerClosingFooterDemoData[0];
  const closingData = headerClosingFooterDemoData[1];
  const footerData = headerClosingFooterDemoData[2];
  const demoData = headerClosingFooterDemoData[3];
  const totalPrice = calcTotalCost(cart, headerData.cart);
  const vatCost = calcVatCost(totalPrice);
  const grandTotal = calcGrandTotal(totalPrice, vatCost);
  const totalCartItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const isCartEmpty = !totalCartItems ? false : true;

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
    logoImg: headerClosingFooterDemoData[0].image.logo.path,
    logoAlt: headerClosingFooterDemoData[0].image.logo.alt,
    logoHomeRoute: headerClosingFooterDemoData[0].route.home,
  };

  const sharedHeaderData = {
    productCategories: headerClosingFooterDemoData[0].productCategories,
    rightArrowIconData: headerClosingFooterDemoData[0].icon.rightArrow,
  };

  const outletContext = {
    headerData,
    closingData,
    demoData,
    totalPrice,
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
          demoData={demoData}
          totalPrice={totalPrice}
          isCartModalOpen={isCartModalOpen}
          totalCartItems={totalCartItems}
          isCartEmpty={isCartEmpty}
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
          menuModal={menuModal}
          isCartEmpty={isCartEmpty}
          onCartModalOpen={onCartModalOpen}
        />
        <Outlet context={outletContext} />
        <Footer footerData={footerData} logoData={logoData} />
      </VStack>
      <ScrollRestoration />
    </SharedHeaderContext.Provider>
  );
}

export default App;
