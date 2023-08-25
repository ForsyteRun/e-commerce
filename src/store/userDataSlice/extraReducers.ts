import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { _ErrorResponse } from '@commercetools/platform-sdk';
import { IUserState } from 'types';
import {
  createAnonymousUser,
  fetchUserDataByRefreshToken,
  fetchUserLoginData,
  registerUser,
} from './thunks';
import {
  setUserData,
  handleLoginError,
  setPendingStatus,
  setUserDataError,
} from './helpers';

const extraReducers = (builder: ActionReducerMapBuilder<IUserState>): void => {
  builder
    .addCase(createAnonymousUser.pending, setPendingStatus)
    .addCase(createAnonymousUser.fulfilled, setUserData)
    .addCase(createAnonymousUser.rejected, setUserDataError)
    .addCase(fetchUserDataByRefreshToken.pending, setPendingStatus)
    .addCase(fetchUserDataByRefreshToken.fulfilled, setUserData)
    .addCase(fetchUserDataByRefreshToken.rejected, (state) => {
      state.loading = 'failed';
    })
    .addCase(fetchUserLoginData.pending, setPendingStatus)
    .addCase(fetchUserLoginData.fulfilled, setUserData)
    .addCase(fetchUserLoginData.rejected, (state, { payload }) => {
      state.loading = 'failed';
      const error = payload as _ErrorResponse;
      state.error = handleLoginError(error);
    })
    .addCase(registerUser.pending, setPendingStatus)
    .addCase(registerUser.fulfilled, (state) => {
      state.loading = 'succeeded';
    })
    .addCase(registerUser.rejected, setUserDataError);
};

export default extraReducers;
