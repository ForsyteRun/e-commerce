import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFiltersState } from 'types';

const initialState: IFiltersState = {
  attributes: {},
  isFiltersActive: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (
      state,
      {
        payload,
      }: PayloadAction<{ attributeName: string; attributeValue: string }>
    ) => {
      const { attributeName, attributeValue } = payload;
      state.attributes[attributeName] = attributeValue;
      state.isFiltersActive = true;
    },
    resetFilters: (state) => {
      state.attributes = {};
      state.isFiltersActive = false;
    },
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
