import { getPageContent } from './requests';
import CheckoutItems from '../components/checkout/CheckoutItems';

const getContent = async fileName => await getPageContent(fileName);

const productList = (headerData, cart, itemImageSize, keyStr) => {
  let items = [];

  Object.keys(cart).forEach(checkoutItemKey => {
    let quantity = cart[checkoutItemKey];

    if (quantity) {
      const productImage = headerData.image[checkoutItemKey];
      const productPrice = headerData.cart[checkoutItemKey].price;
      const displayName = headerData.cart[checkoutItemKey].displayName;

      items.push(
        <CheckoutItems
          key={`${checkoutItemKey}${keyStr}`}
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

const calcTotalCost = (cart, productArr) => {
  return Object.entries(cart).reduce((sum, product) => {
    const productKey = product[0];
    const productQuantity = product[1];

    if (productQuantity) {
      const productPrice = productArr[productKey].price;

      sum += productQuantity * productPrice;
    }

    return sum;
  }, 0);
};

const calcVatCost = total => {
  return total * 0.2; // VAT is 20% of total cost
};

const calcGrandTotal = (total, vat) => {
  const shippingCost = 50; // Shipping is flat $50
  return total + vat + shippingCost;
};

const numToLocaleStr = (num, minFractionDigits) => {
  return num.toLocaleString(undefined, {
    minimumFractionDigits: minFractionDigits,
  });
};

export {
  getContent,
  productList,
  calcTotalCost,
  calcVatCost,
  calcGrandTotal,
  numToLocaleStr,
};
