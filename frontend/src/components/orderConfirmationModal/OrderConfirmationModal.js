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
import ItemAndTotalContainer from './ItemAndTotalContainer';
import BackToHomeButton from './BackToHomeButton';
import { productList, numToLocaleStr } from '../../utils/helper';

const OrderConfirmationModal = ({
  headerData,
  grandTotal,
  isOrderConfirmationModalOpen,
  onOrderConfirmationModalClose,
}) => {
  const cart = useSelector(state => state.cart);
  const checkIconData = headerData.icon.check;
  const route = headerData.route.home;
  const grandTotalStr = numToLocaleStr(grandTotal);
  const itemImageSize = { height: '3.125rem', width: '3.125rem' };
  const keyStr = 'OrderConfirmItem';
  const orderConfirmationProductList = productList(
    headerData,
    cart,
    itemImageSize,
    keyStr
  );
  const lineItems = orderConfirmationProductList;
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
