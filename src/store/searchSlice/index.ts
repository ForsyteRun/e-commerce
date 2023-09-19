import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISearchState } from 'types';

const initialState: ISearchState = {
  searchValue: '',
};

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    resetSearchValue(state) {
      state.searchValue = '';
    },
  },
});

export const { setSearchValue, resetSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
