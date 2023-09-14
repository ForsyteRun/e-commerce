import { createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import {
  setPendingStatus,
  setRejectedStatus,
  transformProductData,
} from 'store/helpers';
import { IAttributesData } from 'types';
import fetchAllProductsData from './fetchAllProductsData';

const initialState: IAttributesData = {
  data: null,
  loading: 'idle',
  error: null,
};

const attributesSlice = createSlice({
  name: 'attributesData',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IAttributesData>): void => {
    builder
      .addCase(fetchAllProductsData.pending, (state) => {
        setPendingStatus(state);
        state.data = null;
      })
      .addCase(fetchAllProductsData.fulfilled, (state, { payload }) => {
        const { results } = payload;
        state.loading = 'succeeded';
        state.data = results.map((product) => transformProductData(product));
      })
      .addCase(fetchAllProductsData.rejected, setRejectedStatus);
  },
});

export default attributesSlice.reducer;
