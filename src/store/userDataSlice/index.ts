import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from 'types';
import extraReducers from './extraReducers';

const initialState: IUserState = {
  data: {
    authenticationMode: '',
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
