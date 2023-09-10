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
    setIdentifyUserData(state: IUserState, { payload }) {
      state.data = payload;
    },
  },
  extraReducers,
});

export const { resetUserDataError, setIdentifyUserData } =
  userDataSlice.actions;
export default userDataSlice.reducer;
