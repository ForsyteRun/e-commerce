import { createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { setPendingStatus, setRejectedStatus } from 'store/helpers';
import { IProductsData } from 'types';
import fetchAllProductsData from './fetchAllProductsData';

const initialState: IProductsData = {
  data: null,
  loading: 'idle',
  error: null,
};

const productsDataSlice = createSlice({
  name: 'productsData',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IProductsData>): void => {
    builder
      .addCase(fetchAllProductsData.pending, setPendingStatus)
      .addCase(fetchAllProductsData.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = 'succeeded';
      })
      .addCase(fetchAllProductsData.rejected, setRejectedStatus);
  },
});

export default productsDataSlice.reducer;
