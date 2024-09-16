import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      const { id, imageUrl, name, price, quantity } = action.payload;
      const existingProduct = state.items.find(item => item.id === id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.items.push({ id, imageUrl, name, price, quantity });
      }
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      state.items.map(item => item.product?.id === id ? {...item, quantity} : item)
    },
    resetCart(state) {
      state.items = [];
    },
    removeProduct(state, action) {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    }
  },
});

export const { addProduct, updateQuantity, resetCart, removeProduct } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;

export const selectTotalItems = state =>
  state.cart.items.reduce((total, item) => total + (item.quantity || 0), 0);

export const selectTotalPrice = state =>
  state.cart.items.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);

export default cartSlice.reducer;
