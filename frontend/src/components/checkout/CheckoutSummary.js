import { useOutletContext } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { VStack, Heading } from '@chakra-ui/react';
import CheckoutItems from './CheckoutItems';
import CheckoutPriceSummary from './CheckoutPriceSummary';
import PayButton from './PayButton';
import headingStyles from '../../theme/headingStyles';

const CheckoutSummary = ({ headerData, setGrandTotal, isValid }) => {
  const cart = useSelector(state => state.cart);
  const onOrderConfirmationModalOpen =
    useOutletContext().onOrderConfirmationModalOpen;
  const itemImageSize = { height: '4rem', width: '4rem' };

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
            key={`${checkoutItemKey}CheckoutItem`}
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

  const calcCartTotalCost = () => {
    if (!checkoutItems().length) return 0;

    return Object.entries(cart).reduce((sum, cartItem) => {
      const cartItemKey = cartItem[0];
      const cartItemQuantity = cartItem[1];

      if (cartItemQuantity) {
        const productPrice = headerData.cart[cartItemKey].price;

        sum += cartItemQuantity * productPrice;
      }

      return sum;
    }, 0);
  };

  const calcVatCost = () => {
    return calcCartTotalCost() * 0.2; // VAT is flat 20%
  };

  const calcGrandTotal = () => {
    const shippingCost = 50; // Shipping is flat $50
    const grandTotal = calcCartTotalCost() + calcVatCost() + shippingCost;

    setGrandTotal(grandTotal);
    return grandTotal;
  };

  const totalPriceStr = calcCartTotalCost().toLocaleString();
  const vatCostStr = calcVatCost().toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });
  const grandTotalStr = calcGrandTotal().toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });

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
        {checkoutItems()}
      </VStack>
      <CheckoutPriceSummary
        totalPrice={totalPriceStr}
        vatCost={vatCostStr}
        grandTotal={grandTotalStr}
        onOrderConfirmationModalOpen={onOrderConfirmationModalOpen}
      />
      <PayButton
        isValid={isValid}
        numOfCartItems={checkoutItems().length}
        onOrderConfirmationModalOpen={onOrderConfirmationModalOpen}
      />
    </VStack>
  );
};

export default CheckoutSummary;
