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
  setPendingStatus,
  handleLoginError,
  setCommonError,
} from './helpers';

const extraReducers = (builder: ActionReducerMapBuilder<IUserState>): void => {
  builder
    .addCase(createAnonymousUser.pending, setPendingStatus)
    .addCase(createAnonymousUser.fulfilled, setUserData)
    .addCase(createAnonymousUser.rejected, setCommonError)
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
      state.error = handleLoginError(error);
    })
    .addCase(registerUser.pending, setPendingStatus)
    .addCase(registerUser.rejected, setCommonError);
};

export default extraReducers;
