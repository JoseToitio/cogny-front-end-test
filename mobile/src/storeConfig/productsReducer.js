import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addProductsToFirestore, getProductsFromFirestore } from '../utils/firestoreFunctions';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const products = await getProductsFromFirestore();
    return products;
  }
);

export const addProductsAndFetch = createAsyncThunk(
  'products/addProductsAndFetch',
  async () => {
    await addProductsToFirestore();
    const updatedProducts = await getProductsFromFirestore();
    return updatedProducts;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
