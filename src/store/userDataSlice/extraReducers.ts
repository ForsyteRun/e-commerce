import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { setRejectedStatus, setPendingStatus } from 'store/helpers';
import { IUserState } from 'types';
import {
  createAnonymousUser,
  fetchUserDataByRefreshToken,
  fetchUserLoginData,
  registerUser,
  updateUserData,
} from './thunks';
import { setUserData } from './helpers';

const extraReducers = (builder: ActionReducerMapBuilder<IUserState>): void => {
  builder
    .addCase(createAnonymousUser.pending, setPendingStatus)
    .addCase(createAnonymousUser.fulfilled, setUserData)
    .addCase(createAnonymousUser.rejected, setRejectedStatus)
    .addCase(fetchUserDataByRefreshToken.pending, setPendingStatus)
    .addCase(fetchUserDataByRefreshToken.fulfilled, setUserData)
    .addCase(fetchUserDataByRefreshToken.rejected, setRejectedStatus)
    .addCase(fetchUserLoginData.pending, setPendingStatus)
    .addCase(fetchUserLoginData.fulfilled, setUserData)
    .addCase(fetchUserLoginData.rejected, setRejectedStatus)
    .addCase(registerUser.pending, setPendingStatus)
    .addCase(registerUser.fulfilled, (state) => {
      state.loading = 'succeeded';
    })
    .addCase(registerUser.rejected, setRejectedStatus)
    .addCase(updateUserData.pending, setPendingStatus)
    .addCase(updateUserData.fulfilled, setUserData)
    .addCase(updateUserData.rejected, setRejectedStatus);
};

export default extraReducers;
