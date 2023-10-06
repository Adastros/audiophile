import { useSelector } from 'react-redux';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react';
import CheckIcon from './CheckIcon';
import ConfirmationMessage from './ConfirmationMessage';
import CheckoutItems from '../checkout/CheckoutItems';
import ItemAndTotalContainer from './ItemAndTotalContainer';
import BackToHomeButton from './BackToHomeButton';

const OrderConfirmationModal = ({
  headerData,
  grandTotal,
  isOrderConfirmationModalOpen,
  onOrderConfirmationModalClose,
}) => {
  const cart = useSelector(state => state.cart);
  const checkIconData = headerData.icon.check;
  const route = headerData.route.home;
  const grandTotalStr = grandTotal.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });
  const itemImageSize = { height: '3.125rem', width: '3.125rem' };

  const checkoutItems = () => {
    let items = [];

    Object.keys(cart).forEach(checkoutItemKey => {
      let quantity = cart[checkoutItemKey];

      if (quantity) {
        const productImage = headerData.image[checkoutItemKey];
        const productPrice = headerData.cart[checkoutItemKey].price;
        const displayName = headerData.cart[checkoutItemKey].displayName;

        items.push(
          <CheckoutItems
            key={`${checkoutItemKey}OrderConfirmItem`}
            checkoutItemKey={checkoutItemKey}
            productImage={productImage}
            displayName={displayName}
            price={productPrice}
            quantity={quantity}
            itemImageSize={itemImageSize}
          />
        );
      }
    });

    return items;
  };

  const lineItems = checkoutItems();
  const numOfItemsToDisplay = lineItems.length - 1;
  const isMoreThanTwoLineItems = lineItems.length > 1 ? true : false;
  const displayOrHideItemList = isMoreThanTwoLineItems ? 'block' : 'none';
  const positionGrandPrice = isMoreThanTwoLineItems ? 'flex-end' : 'center';

  return (
    <Modal
      isOpen={isOrderConfirmationModalOpen}
      onClose={onOrderConfirmationModalClose}
      scrollBehavior="outside"
      variant="orderConfirmation"
      closeOnEsc={false}
      closeOnOverlayClick={false}
      isCentered={true}
    >
      <ModalOverlay />
      <ModalContent>
        <CheckIcon checkIconData={checkIconData} />
        <ModalHeader>{'thank you \nfor your order'}</ModalHeader>
        <ModalBody>
          <ConfirmationMessage />
          <ItemAndTotalContainer
            lineItems={lineItems}
            numOfItemsToDisplay={numOfItemsToDisplay}
            displayOrHideItemList={displayOrHideItemList}
            positionGrandPrice={positionGrandPrice}
            grandTotalStr={grandTotalStr}
          />
        </ModalBody>
        <ModalFooter onClick={onOrderConfirmationModalClose}>
          <BackToHomeButton
            buttonVariant="seeProductCaramel"
            buttonSize="checkout"
            route={route}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OrderConfirmationModal;
