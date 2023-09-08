import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { setRejectedStatus, setPendingStatus } from 'store/helpers';
import setState from 'store/helpers/setState';
import { IUserState } from 'types';
import {
  createAnonymousUser,
  fetchUserDataByRefreshToken,
  fetchUserLoginData,
  registerUser,
  updateUserData,
} from './thunks';

const extraReducers = (builder: ActionReducerMapBuilder<IUserState>): void => {
  builder
    .addCase(createAnonymousUser.pending, setPendingStatus)
    .addCase(createAnonymousUser.fulfilled, setState)
    .addCase(createAnonymousUser.rejected, setRejectedStatus)
    .addCase(fetchUserDataByRefreshToken.pending, setPendingStatus)
    .addCase(fetchUserDataByRefreshToken.fulfilled, setState)
    .addCase(fetchUserDataByRefreshToken.rejected, setRejectedStatus)
    .addCase(fetchUserLoginData.pending, setPendingStatus)
    .addCase(fetchUserLoginData.fulfilled, setState)
    .addCase(fetchUserLoginData.rejected, setRejectedStatus)
    .addCase(registerUser.pending, setPendingStatus)
    .addCase(registerUser.fulfilled, (state) => {
      state.loading = 'succeeded';
    })
    .addCase(registerUser.rejected, setRejectedStatus)
    .addCase(updateUserData.pending, setPendingStatus)
    .addCase(updateUserData.fulfilled, setState)
    .addCase(updateUserData.rejected, setRejectedStatus);
};

export default extraReducers;
