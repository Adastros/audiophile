import { VStack } from '@chakra-ui/react';
import PriceTotal from '../cartModal/PriceTotal';
import ShippingCost from './ShippingCost';
import VatCost from './VatCost';
import GrandTotal from './GrandTotal';

const CheckoutPriceSummary = ({ totalPrice, vatCost, grandTotal }) => {
  return (
    <VStack w="100%" gap="0.5rem">
      <PriceTotal totalPrice={totalPrice} />
      <ShippingCost />
      <VatCost vatCost={vatCost} />
      <GrandTotal grandTotal={grandTotal} />
    </VStack>
  );
};

export default CheckoutPriceSummary;
