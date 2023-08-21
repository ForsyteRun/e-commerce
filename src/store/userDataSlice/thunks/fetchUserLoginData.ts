import { createAsyncThunk } from '@reduxjs/toolkit';
import { _ErrorResponse } from '@commercetools/platform-sdk';
import { getRefreshTokenCookie } from 'helpers/processRefreshTokenCookie';
import { IUserDataState, LoginFormValues } from 'types';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';

const fetchUserLoginData = createAsyncThunk(
  'userData/fetchUserLoginData',
  async (userData: LoginFormValues, { rejectWithValue }) => {
    const refreshToken = getRefreshTokenCookie();
    const api = createRefreshTokenClientApi(refreshToken);

    const response = await api
      .login()
      .post({ body: userData })
      .execute()
      .then((res) => {
        const data: IUserDataState = {
          type: 'registered',
          id: res.body.customer.id,
          cartId: res.body.cart?.id,
        };

        return data;
      })
      .catch((err: _ErrorResponse) => {
        return rejectWithValue({ ...err });
      });

    return response;
  }
);

export default fetchUserLoginData;
