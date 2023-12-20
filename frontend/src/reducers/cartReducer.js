import { createSlice } from '@reduxjs/toolkit';

let initialCartQuantityState = {
  xx99mkii: 0,
  xx99mki: 0,
  xx59: 0,
  zx9: 0,
  zx7: 0,
  yx1: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartQuantityState,
  reducers: {
    addToCart(state, action) {
      const productKey = action.payload.key;
      const quantity = action.payload.quantity;
      const sum = state[productKey] + quantity;

      // Limit items in cart to 99 for each product available
      return { ...state, [productKey]: sum > 99 ? 99 : sum };
    },
    clearCart() {
      return initialCartQuantityState;
    },
    incrementQuantity(state, action) {
      const productKey = action.payload.key;
      const quantity = state[productKey];

      if (quantity < 99) {
        return { ...state, [productKey]: state[productKey] + 1 };
      }
    },
    decrementQuantity(state, action) {
      const productKey = action.payload.key;
      const quantity = state[productKey];

      if (quantity > 0) {
        return { ...state, [productKey]: state[productKey] - 1 };
      }
    },
  },
});

export const { addToCart, clearCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
