import { createAsyncThunk } from '@reduxjs/toolkit';
import { _ErrorResponse } from '@commercetools/platform-sdk';
import { getRefreshTokenCookie } from 'helpers/processRefreshTokenCookie';
import { IUserDataState, LoginFormValues } from 'types';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';
import createPasswordFlowClientApi from 'services/sdkClient/createPasswordFlowClientApi';

const fetchUserLoginData = createAsyncThunk(
  'userData/fetchUserLoginData',
  async (userData: LoginFormValues, { rejectWithValue }) => {
    const refreshToken = getRefreshTokenCookie();
    const api = createRefreshTokenClientApi(refreshToken);
    const passwordApi = createPasswordFlowClientApi(userData);

    const response = await api
      .login()
      .post({ body: userData })
      .execute()
      .then(async () => {
        const res = await passwordApi
          .me()
          .get()
          .execute()
          .then((resp) => {
            const data: IUserDataState = {
              type: 'registered',
              id: resp.body.id,
            };

            return data;
          });
        return res;
      })
      .catch((err: _ErrorResponse) => {
        return rejectWithValue({ ...err });
      });

    return response;
  }
);

export default fetchUserLoginData;
