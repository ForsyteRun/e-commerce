import { createSlice } from '@reduxjs/toolkit';
import { setPendingStatus, setRejectedStatus } from 'store/helpers';
import setState from 'store/helpers/setState';
import { ICartState } from 'types';
import {
  fetchCartData,
  updateCart,
  fetchCartOnStart,
  createAnonymousCart,
} from './thunks';

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
      .addCase(fetchCartOnStart.pending, setPendingStatus)
      .addCase(fetchCartOnStart.fulfilled, setState)
      .addCase(fetchCartOnStart.rejected, setRejectedStatus)
      .addCase(createAnonymousCart.pending, setPendingStatus)
      .addCase(createAnonymousCart.fulfilled, setState)
      .addCase(createAnonymousCart.rejected, setRejectedStatus)
      .addCase(fetchCartData.pending, setPendingStatus)
      .addCase(fetchCartData.fulfilled, setState)
      .addCase(fetchCartData.rejected, setRejectedStatus)
      .addCase(updateCart.pending, setPendingStatus)
      .addCase(updateCart.fulfilled, setState)
      .addCase(updateCart.rejected, setRejectedStatus);
  },
});

export default cartSlice.reducer;
