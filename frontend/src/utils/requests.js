import axios from 'axios';

const baseUrl = '/api';

const getPageContent = async contentToRequest => {
  const response = await axios.get(`${baseUrl}/page/${contentToRequest}`);
  return response.data;
};

const postData = data => {
  axios.post(`${baseUrl}/checkout-form`, data);
};

const getNewCartId = async () => {
  const response = await axios.get(`${baseUrl}/cart/new-cart`);
  return response.data.cartId;
};

const getCartData = async () => {
  const cartId = localStorage.getItem('cartId');
  const response = await axios.post(`${baseUrl}/cart/session`, {
    cartId,
  });

  return response.data;
};

const increaseItemQuantity = (cartId, cartItem, quantity) => {
  const cartData = {
    cartId,
    cartItem,
    quantity,
  };

  axios.post(`${baseUrl}/cart/increase-item-quantity`, cartData);
};

const decreaseItemQuantity = (cartId, cartItem, quantity) => {
  const cartData = {
    cartId,
    cartItem,
    quantity,
  };

  axios.post(`${baseUrl}/cart/decrease-item-quantity`, cartData);
};

const clearDatabaseCart = cartId => {
  axios.post(`${baseUrl}/cart/clear-cart`, { cartId });
};

const completePurchase = cartId => {
  axios.post(`${baseUrl}/cart/purchase-complete`, { cartId });
};

export {
  getPageContent,
  postData,
  getNewCartId,
  getCartData,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearDatabaseCart,
  completePurchase,
};
