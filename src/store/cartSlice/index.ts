import { createSlice } from '@reduxjs/toolkit';
import { setPendingStatus, setRejectedStatus } from 'store/helpers';
import { ICartState } from 'types';
import getCartData from './fetchCartData';

const initialState: ICartState = {
  data: {
    id: '',
    version: 0,
    lineItems: [],
    totalPrice: {
      type: 'centPrecision',
      centAmount: 0,
      currencyCode: '',
      fractionDigits: 0,
    },
  },
  loading: 'idle',
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartData.pending, setPendingStatus)
      .addCase(getCartData.fulfilled, (state, { payload }) => {
        state.loading = 'succeeded';
        state.data = payload;
      })
      .addCase(getCartData.rejected, setRejectedStatus);
  },
});

export default cartSlice.reducer;
