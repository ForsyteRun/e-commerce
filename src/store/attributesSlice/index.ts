import { createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { setPendingStatus, setRejectedStatus } from 'store/helpers';
import transformProductAttributes from 'store/helpers/transformProductData/transformProductAttributes';
import { IAttributesData } from 'types';
import fetchAttributesData from './fetchAttributesData';

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
      .addCase(fetchAttributesData.pending, (state) => {
        setPendingStatus(state);
        state.data = null;
      })
      .addCase(fetchAttributesData.fulfilled, (state, { payload }) => {
        const { results } = payload;
        state.loading = 'succeeded';
        state.data = results.map(
          (product) =>
            product.masterVariant.attributes &&
            transformProductAttributes(product.masterVariant.attributes)
        );
      })
      .addCase(fetchAttributesData.rejected, setRejectedStatus);
  },
});

export default attributesSlice.reducer;
