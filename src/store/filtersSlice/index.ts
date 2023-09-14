import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFiltersState } from 'types';

const initialState: IFiltersState = {
  attributes: {},
  isButtonActive: false,
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
      state.isButtonActive = true;
    },
    resetFilters: (state) => {
      state.attributes = {};
      state.isButtonActive = false;
    },
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
