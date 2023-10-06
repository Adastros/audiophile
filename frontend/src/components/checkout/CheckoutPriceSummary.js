import { VStack } from '@chakra-ui/react';
import PriceTotal from '../shared/header/PriceTotal';
import ShippingCost from './ShippingCost';
import VatCost from './VatCost';
import GrandTotal from './GrandTotal';
import PayButton from './PayButton';

const CheckoutPriceSummary = ({
  totalPrice,
  vatCost,
  grandTotal,
  onOrderConfirmationModalOpen,
}) => {
  return (
    <VStack w="100%" gap="0.5rem">
      <PriceTotal totalPrice={totalPrice} />
      <ShippingCost />
      <VatCost vatCost={vatCost} />
      <GrandTotal grandTotal={grandTotal} />
      <PayButton onOrderConfirmationModalOpen={onOrderConfirmationModalOpen} />
    </VStack>
  );
};

export default CheckoutPriceSummary;
