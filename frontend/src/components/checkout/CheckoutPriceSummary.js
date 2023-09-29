import { VStack } from '@chakra-ui/react';
import PriceTotal from '../shared/header/PriceTotal';
import ShippingCost from './ShippingCost';
import VatCost from './VatCost';
import GrandTotal from './GrandTotal';
import PayButton from './ContinueAndPayButton';

const CheckoutCostSummary = ({ totalPrice, vatCost, grandTotal }) => {
  return (
    <VStack w="100%" gap="0.5rem">
      <PriceTotal totalPrice={totalPrice} />
      <ShippingCost />
      <VatCost vatCost={vatCost} />
      <GrandTotal grandTotal={grandTotal} />
      <PayButton />
    </VStack>
  );
};

export default CheckoutCostSummary;
