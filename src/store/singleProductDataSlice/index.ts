import { createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { setPendingStatus, setRejectedStatus } from 'store/helpers';
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
  extraReducers: (
    builder: ActionReducerMapBuilder<ISingleProductData>
  ): void => {
    builder
      .addCase(fetchSingleProductData.pending, setPendingStatus)
      .addCase(fetchSingleProductData.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = 'succeeded';
      })
      .addCase(fetchSingleProductData.rejected, setRejectedStatus);
  },
});

export default singleProductDataSlice.reducer;
