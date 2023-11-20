import { useOutletContext } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { VStack, Heading } from '@chakra-ui/react';
import CheckoutPriceSummary from './CheckoutPriceSummary';
import PayButton from './PayButton';
import CheckoutDemoButton from './CheckoutDemoButton';
import headingStyles from '../../theme/headingStyles';
import { productList, numToLocaleStr } from '../../utils/helper';

const CheckoutSummary = ({
  headerData,
  outletContext,
  isValid,
  handleCheckoutDemoButtonClick,
}) => {
  const cart = useSelector(state => state.cart);
  const onOrderConfirmationModalOpen =
    useOutletContext().onOrderConfirmationModalOpen;
  const itemImageSize = { height: '4rem', width: '4rem' };
  const keyStr = 'CheckoutItem';
  const summaryProductList = productList(
    headerData,
    cart,
    itemImageSize,
    keyStr
  );
  const numOfCartItems = summaryProductList.length;
  const totalPriceStr = numToLocaleStr(outletContext.totalPrice, 2);
  const vatCostStr = numToLocaleStr(outletContext.vatCost, 2);
  const grandTotalStr = numToLocaleStr(outletContext.grandTotal, 2);

  return (
    <VStack
      w={{ base: '100%', lg: '21.875rem' }}
      marginTop={{ base: '0.5rem', lg: '0' }}
      marginBottom={{ base: '6rem', lg: '0' }}
      padding={{ base: '2rem 1.5rem', md: '2rem' }}
      align="flex-start"
      gap="2rem"
      borderRadius="0.5rem"
      backgroundColor="white"
    >
      <Heading as="h2" {...headingStyles.cart}>
        SUMMARY
      </Heading>
      <VStack w="100%" gap="1.5rem">
        {summaryProductList}
      </VStack>
      <CheckoutPriceSummary
        totalPrice={totalPriceStr}
        vatCost={vatCostStr}
        grandTotal={grandTotalStr}
        onOrderConfirmationModalOpen={onOrderConfirmationModalOpen}
      />
      <CheckoutDemoButton
        handleCheckoutDemoButtonClick={handleCheckoutDemoButtonClick}
      />
      <PayButton
        isValid={isValid}
        numOfCartItems={numOfCartItems}
        onOrderConfirmationModalOpen={onOrderConfirmationModalOpen}
      />
    </VStack>
  );
};

export default CheckoutSummary;
