import React, { useEffect } from 'react';
import { Outlet, useLoaderData, ScrollRestoration } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { VStack, useDisclosure } from '@chakra-ui/react';
import Header from './components/header/Header';
import MenuModal from './components/header/MenuModal';
import CartModal from './components/cartModal/CartModal';
import OrderConfirmationModal from './components/orderConfirmationModal/OrderConfirmationModal';
import Footer from './components/footer/Footer';
import SharedHeaderContext from './utils/SharedHeaderContext';
import {
  calcTotalCost,
  calcVatCost,
  calcGrandTotal,
  addItemsToCart,
} from './utils/helper';
import { getNewCartId, getCartData } from './utils/requests';

function App() {
  // Fetch initial data from server
  const initialPageData = useLoaderData();

  // Redux Cart State
  const cart = useSelector(state => state.cart);

  // Loads cart data on page load.
  // If a browser doesn't have a cartId in localStorage, add the new ID.
  // If previous cart data indicates a purchase was completed, assign a
  // new cart ID.
  // Otherwise, update user's cart on first website visit or refresh if
  // they had items in it in a previous session.
  useEffect(async () => {
    const cartData = await getCartData();

    if (!localStorage.getItem('cartId')) {
      localStorage.setItem('cartId', cartData.cartId);
    } else if (cartData.purchaseComplete) {
      const newCartId = getNewCartId();
      localStorage.setItem('cartId', newCartId);
    } else {
      addItemsToCart(cartData.cart);
    }
  }, []);

  // Data and method assignment
  const headerData = initialPageData[0];
  const closingData = initialPageData[1];
  const footerData = initialPageData[2];
  const demoData = initialPageData[3];
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
    logoImg: initialPageData[0].image.logo.path,
    logoAlt: initialPageData[0].image.logo.alt,
    homeRoute: initialPageData[0].route.home,
  };

  const sharedHeaderData = {
    productCategories: initialPageData[0].productCategories,
    rightArrowIconData: initialPageData[0].icon.rightArrow,
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
