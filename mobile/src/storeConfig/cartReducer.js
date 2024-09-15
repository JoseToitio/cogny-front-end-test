import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const itemExists = state.find((item) => item.product.id === product.id);
      if (itemExists) {
        itemExists.quantity += quantity;
      } else {
        state.push({ product, quantity });
      }
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.find((item) => item.product.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
    resetCart: (state) => {
      return [];
    },
  },
});

export const { addToCart, updateQuantity, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
