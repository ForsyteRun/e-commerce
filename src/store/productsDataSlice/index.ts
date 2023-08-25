import { createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import {
  setPendingStatus,
  setRejectedStatus,
  transformProductData,
  calculateProductsCounters,
} from 'store/helpers';
import { IProductsData } from 'types';
import fetchAllProductsData from './fetchAllProductsData';

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
      .addCase(fetchAllProductsData.pending, (state) => {
        setPendingStatus(state);
        state.counters = null;
      })
      .addCase(fetchAllProductsData.fulfilled, (state, { payload }) => {
        const { results, ...counts } = payload;

        state.loading = 'succeeded';
        state.data = results.map((product) => transformProductData(product));
        state.counters = calculateProductsCounters(counts);
      })
      .addCase(fetchAllProductsData.rejected, setRejectedStatus);
  },
});

export default productsDataSlice.reducer;
