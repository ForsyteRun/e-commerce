import { createSlice } from '@reduxjs/toolkit';
import createAnonymousUser from './thunks/createAnonymousUser';
import fetchUserDataByRefreshToken from './thunks/fetchUserDataByRefreshToken';
import fetchUserLoginData from './thunks/fetchUserLoginData';
import extraReducers from './extraReducers';
import { IUserState } from '../../types';

const initialState: IUserState = {
  data: {
    type: null,
    id: null,
    cartId: null,
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
export { createAnonymousUser, fetchUserDataByRefreshToken, fetchUserLoginData };
export default userDataSlice.reducer;
