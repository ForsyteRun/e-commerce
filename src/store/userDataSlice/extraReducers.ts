import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { _ErrorResponse } from '@commercetools/platform-sdk';
import createAnonymousUser from './thunks/createAnonymousUser';
import fetchUserDataByRefreshToken from './thunks/fetchUserDataByRefreshToken';
import fetchUserLoginData from './thunks/fetchUserLoginData';
import setPendingStatus from './helpers/setPendingStatus';
import setUserData from './helpers/setUserData';
import handleLoginError from './helpers/handleLoginError';
import { IUserState } from '../../types';

const extraReducers = (builder: ActionReducerMapBuilder<IUserState>): void => {
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
      state.error = handleLoginError(error);
    });
};

export default extraReducers;
