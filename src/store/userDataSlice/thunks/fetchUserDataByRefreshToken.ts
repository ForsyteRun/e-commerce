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
      .activeCart()
      .get()
      .execute()
      .then((res) => {
        const { anonymousId, customerId } = res.body;
        const data: IUserDataState = {
          type: null,
          id: null,
        };

        if (anonymousId && !customerId) {
          data.type = 'anonymous';
          data.id = anonymousId;
        } else if (customerId) {
          data.type = 'registered';
          data.id = customerId;
        }

        return data;
      })
      .catch((err: _ErrorResponse) => {
        const isNoRefreshToken =
          err.message ===
          'The refresh token was not found. It may have expired.';
        if (isNoRefreshToken) {
          dispatch(createAnonymousUser());
        }
        return rejectWithValue({ ...err });
      });

    return response;
  }
);

export default fetchUserDataByRefreshToken;
