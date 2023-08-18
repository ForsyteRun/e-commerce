import { createAsyncThunk } from '@reduxjs/toolkit';
import { _ErrorResponse } from '@commercetools/platform-sdk';
import createRefreshTokenClientApi from '../../../services/sdkClient/createRefreshTokenClientApi';
import createAnonymousUser from './createAnonymousUser';
import { IUserDataState } from '../../../types';

const fetchUserDataByRefreshToken = createAsyncThunk(
  'userData/fetchUserDataByRefreshToken',
  async (refreshToken: string, { dispatch, rejectWithValue }) => {
    const api = createRefreshTokenClientApi(refreshToken);

    try {
      const response = await api.me().activeCart().get().execute();

      const data: IUserDataState = {
        type: null,
        id: null,
        cartId: response.body.id,
      };

      if (response.body.anonymousId) {
        data.type = 'anonymous';
        data.id = response.body.anonymousId;
      } else if (response.body.customerId) {
        data.type = 'registered';
        data.id = response.body.customerId;
      }

      return data;
    } catch (err) {
      const { message, statusCode } = err as _ErrorResponse;

      const noRefreshTokenMessage =
        'The refresh token was not found. It may have expired.';

      if (message === noRefreshTokenMessage) {
        dispatch(createAnonymousUser());
      }

      return rejectWithValue({ message, statusCode });
    }
  }
);

export default fetchUserDataByRefreshToken;
