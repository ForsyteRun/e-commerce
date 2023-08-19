import { createSlice } from '@reduxjs/toolkit';
import extraReducers from './extraReducers';
import { IUserState } from '../../types';

const initialState: IUserState = {
  data: {
    type: null,
    id: null,
  },
  loading: 'idle',
  error: null,
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    resetUserDataError(state: IUserState) {
      state.loading = 'idle';
      state.error = null;
    },
  },
  extraReducers,
});

export const { resetUserDataError } = userDataSlice.actions;
export default userDataSlice.reducer;
