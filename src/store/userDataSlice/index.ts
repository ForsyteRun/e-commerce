import { createSlice } from '@reduxjs/toolkit';
import { _ErrorResponse } from '@commercetools/platform-sdk';
import createAnonymousUser from './thunks/createAnonymousUser';
import fetchUserDataByRefreshToken from './thunks/fetchUserDataByRefreshToken';
import fetchUserLoginData from './thunks/fetchUserLoginData';
import ERROR_MESSAGES from '../../pages/LoginPage/components/LoginForm/components/LoginError/constants';
import setPendingStatus from './helpers/setPendingStatus';
import setUserData from './helpers/setUserData';
import { IUserState, RequestStatusCode } from '../../types';

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
  extraReducers: (builder) => {
    builder
      .addCase(createAnonymousUser.pending, setPendingStatus)
      .addCase(createAnonymousUser.fulfilled, setUserData)
      .addCase(createAnonymousUser.rejected, (state) => {
        state.loading = 'failed';
        state.error = 'Something went wrong...';
      })
      .addCase(fetchUserDataByRefreshToken.pending, setPendingStatus)
      .addCase(fetchUserDataByRefreshToken.fulfilled, setUserData)
      .addCase(fetchUserDataByRefreshToken.rejected, (state, { payload }) => {
        state.loading = 'failed';
        const error = payload as _ErrorResponse;
        state.error = error.message;
      })
      .addCase(fetchUserLoginData.pending, setPendingStatus)
      .addCase(fetchUserLoginData.fulfilled, setUserData)
      .addCase(fetchUserLoginData.rejected, (state, { payload }) => {
        state.loading = 'failed';
        const error = payload as _ErrorResponse;
        if (error.message === ERROR_MESSAGES.ACCOUNT_NOT_FOUND) {
          state.error = error.message;
        } else if (error.statusCode === RequestStatusCode.BadRequest) {
          state.error = ERROR_MESSAGES.BAD_REQUEST;
        } else {
          state.error = ERROR_MESSAGES.GENERIC;
        }
      });
  },
});

export const { resetUserDataError } = userDataSlice.actions;
export { createAnonymousUser, fetchUserDataByRefreshToken, fetchUserLoginData };
export default userDataSlice.reducer;
