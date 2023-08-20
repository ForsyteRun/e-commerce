import { createAsyncThunk } from '@reduxjs/toolkit';
import { _ErrorResponse } from '@commercetools/platform-sdk';
import { noRefreshTokenMessage } from 'constants/';
import createRefreshTokenClientApi from '../../../services/sdkClient/createRefreshTokenClientApi';
import createAnonymousUser from './createAnonymousUser';
import { IUserDataState } from '../../../types';

const fetchUserDataByRefreshToken = createAsyncThunk(
  'userData/fetchUserDataByRefreshToken',
  async (refreshToken: string, { dispatch, rejectWithValue }) => {
    const api = createRefreshTokenClientApi(refreshToken);

    try {
      const response = await api.me().activeCart().get().execute();

      const { anonymousId, customerId, id } = response.body;

      const data: IUserDataState = {
        type: null,
        id: null,
        cartId: id,
      };

      if (anonymousId && !customerId) {
        data.type = 'anonymous';
        data.id = anonymousId;
      } else if (customerId) {
        data.type = 'registered';
        data.id = customerId;
      }

      return data;
    } catch (err) {
      const { message, statusCode } = err as _ErrorResponse;

      if (message === noRefreshTokenMessage) {
        dispatch(createAnonymousUser());
      }

      return rejectWithValue({ message, statusCode });
    }
  }
);

export default fetchUserDataByRefreshToken;
