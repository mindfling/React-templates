import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_PRODUCTS } from '../../const';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;
    const response = await fetch(API_PRODUCTS, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      // if (response.status === 401) {
      //   console.log('products Slice response status was 401');
      //   return thunkAPI.rejectWithValue({
      //     status: response.status, // will payload
      //     error: 'Не удалось получить продукты products',
      //   });
      // }
      throw new Error('Не удалось получить СПИСОК ТОВАРОВ');
    }

    return await response.json();
  },
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer; // *productsReducer
