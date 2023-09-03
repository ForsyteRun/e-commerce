import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISortState, SortBy, SortDirections } from 'types';

const initialState: ISortState = {
  price: false,
  name: false,
};

const sortSlice = createSlice({
  name: 'sortSlice',
  initialState,
  reducers: {
    setSort(
      state,
      { payload }: PayloadAction<{ by: SortBy; direction: SortDirections }>
    ) {
      const { by, direction } = payload;
      state.price = by === 'price' ? direction : false;
      state.name = by === 'name' ? direction : false;
    },
    resetSort(state) {
      state.price = false;
      state.name = false;
    },
  },
});

export const { setSort, resetSort } = sortSlice.actions;
export default sortSlice.reducer;
