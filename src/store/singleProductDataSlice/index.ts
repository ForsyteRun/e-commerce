import { createSlice } from '@reduxjs/toolkit';
import {
  setPendingStatus,
  setRejectedStatus,
  transformProductData,
} from 'store/helpers';
import { ISingleProductData } from 'types';
import fetchSingleProductData from './fetchSingleProductData';

const initialState: ISingleProductData = {
  data: null,
  loading: 'idle',
  error: null,
};

const singleProductDataSlice = createSlice({
  name: 'singleProductData',
  initialState,
  reducers: {},
  extraReducers: (builder): void => {
    builder
      .addCase(fetchSingleProductData.pending, (state) => {
        setPendingStatus(state);
        state.data = null;
      })
      .addCase(fetchSingleProductData.fulfilled, (state, { payload }) => {
        const data = transformProductData(payload);
        state.data = data;
        state.loading = 'succeeded';
      })
      .addCase(fetchSingleProductData.rejected, setRejectedStatus);
  },
});

export default singleProductDataSlice.reducer;
