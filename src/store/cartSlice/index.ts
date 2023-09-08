import { createSlice } from '@reduxjs/toolkit';
import { setPendingStatus, setRejectedStatus } from 'store/helpers';
import setState from 'store/helpers/setState';
import { ICartState } from 'types';
import fetchCartData from './fetchCartData';
import updateCart from './updateCart';

const initialState: ICartState = {
  data: null,
  loading: 'idle',
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, setPendingStatus)
      .addCase(fetchCartData.fulfilled, setState)
      .addCase(fetchCartData.rejected, setRejectedStatus)
      .addCase(updateCart.pending, setPendingStatus)
      .addCase(updateCart.fulfilled, setState)
      .addCase(updateCart.rejected, setRejectedStatus);
  },
});

export default cartSlice.reducer;
