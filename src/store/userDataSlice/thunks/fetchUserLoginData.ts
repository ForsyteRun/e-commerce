import { createAsyncThunk } from '@reduxjs/toolkit';
import { _ErrorResponse } from '@commercetools/platform-sdk';
import { LoginFormValues } from 'types';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';
import createPasswordFlowClientApi from 'services/sdkClient/createPasswordFlowClientApi';
import { getRegisteredUserData } from '../helpers';

const fetchUserLoginData = createAsyncThunk(
  'userData/fetchUserLoginData',
  async (userData: LoginFormValues, { rejectWithValue }) => {
    const api = createRefreshTokenClientApi();
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
          .then((customerData) => {
            const data = getRegisteredUserData(customerData.body);

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
