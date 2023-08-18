import { createSlice } from '@reduxjs/toolkit';
import { _ErrorResponse } from '@commercetools/platform-sdk';
import createAnonymousUser from './thunks/createAnonymousUser';
import fetchUserDataByRefreshToken from './thunks/fetchUserDataByRefreshToken';
import fetchUserLoginData from './thunks/fetchUserLoginData';
import { IUserState, RequestStatusCode } from '../../types';
import ERROR_MESSAGES from '../../pages/LoginPage/components/LoginForm/components/LoginError/constants';

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
      .addCase(createAnonymousUser.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(createAnonymousUser.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = 'succeeded';
      })
      .addCase(createAnonymousUser.rejected, (state) => {
        state.loading = 'failed';
        state.error = 'Something went wrong...';
      })
      .addCase(fetchUserDataByRefreshToken.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchUserDataByRefreshToken.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = 'succeeded';
      })
      .addCase(fetchUserDataByRefreshToken.rejected, (state, { payload }) => {
        state.loading = 'failed';
        const error = payload as _ErrorResponse;
        state.error = error.message;
      })
      .addCase(fetchUserLoginData.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchUserLoginData.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = 'succeeded';
      })
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
