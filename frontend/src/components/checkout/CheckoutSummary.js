import { useSelector } from 'react-redux';
import { VStack, Heading } from '@chakra-ui/react';
import CheckoutItems from './CheckoutItems';
import CheckoutCostSummary from './CheckoutPriceSummary';
import headingStyles from '../../theme/headingStyles';

const CheckoutSummary = ({ headerData }) => {
  const cart = useSelector(state => state.cart);

  const checkoutItems = () => {
    return Object.keys(cart).map(checkoutItemKey => {
      let quantity = cart[checkoutItemKey];

      if (quantity) {
        const productImage = headerData.image[checkoutItemKey];
        const productPrice = headerData.cart[checkoutItemKey].price;
        const displayName = headerData.cart[checkoutItemKey].displayName;

        return (
          <CheckoutItems
            key={`${checkoutItemKey}CheckoutItem`}
            checkoutItemKey={checkoutItemKey}
            productImage={productImage}
            displayName={displayName}
            price={productPrice}
            quantity={quantity}
          />
        );
      }
    });
  };

  const calcCartTotalCost = () => {
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

    return calcCartTotalCost() + calcVatCost() + shippingCost;
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
      <CheckoutCostSummary
        totalPrice={totalPriceStr}
        vatCost={vatCostStr}
        grandTotal={grandTotalStr}
      />
    </VStack>
  );
};

export default CheckoutSummary;
