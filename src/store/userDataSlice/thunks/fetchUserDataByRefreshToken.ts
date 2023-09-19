import { createAsyncThunk } from '@reduxjs/toolkit';
import { _ErrorResponse } from '@commercetools/platform-sdk';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';
import { createAnonymousCart } from 'store/cartSlice/thunks';
import getRegisteredUserData from '../helpers/getRegisteredUserData';

const fetchUserDataByRefreshToken = createAsyncThunk(
  'userData/fetchUserDataByRefreshToken',
  async (_, { dispatch, rejectWithValue }) => {
    const api = createRefreshTokenClientApi();

    const response = await api
      .me()
      .get()
      .execute()
      .then((res) => getRegisteredUserData(res.body))
      .catch((err: _ErrorResponse) => {
        const isNoRefreshToken =
          err.message ===
          'The refresh token was not found. It may have expired.';
        if (isNoRefreshToken || err.statusCode === 403) {
          dispatch(createAnonymousCart());
        }
        return rejectWithValue({ ...err });
      });

    return response;
  }
);

export default fetchUserDataByRefreshToken;
