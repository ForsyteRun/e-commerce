import { createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import {
  setPendingStatus,
  setRejectedStatus,
  transformProductData,
  calculateProductsCounters,
} from 'store/helpers';
import { IProductsData } from 'types';
import fetchProductsData from './fetchProductsData';

const initialState: IProductsData = {
  data: null,
  counters: null,
  loading: 'idle',
  error: null,
};

const productsDataSlice = createSlice({
  name: 'productsData',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IProductsData>): void => {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        setPendingStatus(state);
        state.data = null;
      })
      .addCase(fetchProductsData.fulfilled, (state, { payload }) => {
        const { results, ...counts } = payload;

        state.loading = 'succeeded';
        state.data = results.map((product) => transformProductData(product));
        state.counters = calculateProductsCounters(counts);
      })
      .addCase(fetchProductsData.rejected, setRejectedStatus);
  },
});

export default productsDataSlice.reducer;
