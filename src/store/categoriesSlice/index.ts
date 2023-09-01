import { createSlice } from '@reduxjs/toolkit';
import { setPendingStatus, setRejectedStatus } from 'store/helpers';
import { ICategoriesState } from 'types';
import fetchCategoriesList from './fetchCategoriesList';
import transformCategoryData from '../../pages/CatalogPage/helpers/transformCategoryData';

const initialState: ICategoriesState = {
  data: null,
  loading: 'idle',
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesList.pending, setPendingStatus)
      .addCase(fetchCategoriesList.fulfilled, (state, { payload }) => {
        state.loading = 'succeeded';
        state.data = payload.map((category) => transformCategoryData(category));
      })
      .addCase(fetchCategoriesList.rejected, setRejectedStatus);
  },
});

export default categoriesSlice.reducer;
