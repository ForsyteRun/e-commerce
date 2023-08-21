import { createAsyncThunk } from '@reduxjs/toolkit';
import { _ErrorResponse } from '@commercetools/platform-sdk';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';
import { IUserDataState } from 'types';
import createAnonymousUser from './createAnonymousUser';

const fetchUserDataByRefreshToken = createAsyncThunk(
  'userData/fetchUserDataByRefreshToken',
  async (refreshToken: string, { dispatch, rejectWithValue }) => {
    const api = createRefreshTokenClientApi(refreshToken);

    const response = await api
      .me()
      .get()
      .execute()
      .then((res) => {
        const data: IUserDataState = {
          type: 'registered',
          id: res.body.id,
        };

        return data;
      })
      .catch((err: _ErrorResponse) => {
        const isNoRefreshToken =
          err.message ===
          'The refresh token was not found. It may have expired.';
        if (isNoRefreshToken || err.statusCode === 403) {
          dispatch(createAnonymousUser());
        }
        return rejectWithValue({ ...err });
      });

    return response;
  }
);

export default fetchUserDataByRefreshToken;
