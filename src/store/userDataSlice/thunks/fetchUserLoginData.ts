import { createAsyncThunk } from '@reduxjs/toolkit';
import { _ErrorResponse } from '@commercetools/platform-sdk';
import { LoginFormValues } from 'types';
import createCredentialFlow from 'services/sdkClient/createCredentialFlow';
import createPasswordFlowClientApi from 'services/sdkClient/createPasswordFlowClientApi';
import fetchCartData from 'store/cartSlice/fetchCartData';
import getRegisteredUserData from '../helpers/getRegisteredUserData';

const fetchUserLoginData = createAsyncThunk(
  'userData/fetchUserLoginData',
  async (userData: LoginFormValues, { dispatch, rejectWithValue }) => {
    const api = createCredentialFlow();
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
            dispatch(fetchCartData());
            return getRegisteredUserData(customerData.body);
          });

        return res;
      })
      .catch((err: _ErrorResponse) => rejectWithValue({ ...err }));

    return response;
  }
);

export default fetchUserLoginData;
