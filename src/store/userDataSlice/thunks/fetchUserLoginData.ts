import { createAsyncThunk } from '@reduxjs/toolkit';
import { _ErrorResponse } from '@commercetools/platform-sdk';
import createPasswordFlowClientApi from 'services/sdkClient/createPasswordFlowClientApi';
import { getRefreshTokenCookie } from 'helpers/processRefreshTokenCookie';
import { IUserDataState, LoginFormValues } from 'types';
import fetchUserDataByRefreshToken from './fetchUserDataByRefreshToken';

const fetchUserLoginData = createAsyncThunk(
  'userData/fetchUserLoginData',
  async (userData: LoginFormValues, { dispatch, rejectWithValue }) => {
    const api = createPasswordFlowClientApi(userData);

    try {
      const response = await api.login().post({ body: userData }).execute();

      const data: IUserDataState = {
        type: 'registered',
        id: response.body.customer.id,
        cartId: response.body.cart?.id,
      };

      return data;
    } catch (err) {
      const { message, statusCode } = err as _ErrorResponse;

      const refreshToken = getRefreshTokenCookie();
      dispatch(fetchUserDataByRefreshToken(refreshToken));

      return rejectWithValue({ message, statusCode });
    }
  }
);

export default fetchUserLoginData;
