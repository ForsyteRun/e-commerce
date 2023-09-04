import { MyCustomerUpdate, _ErrorResponse } from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';
import { getRegistrationAccessCode } from 'store/registration/registrationAccess.slice';
import { getRegisteredUserData } from '../helpers';
import fetchUserDataByRefreshToken from './fetchUserDataByRefreshToken';

const updateAddress = createAsyncThunk(
  'userData/addAddress',
  async (_body: MyCustomerUpdate, { dispatch }) => {
    const api = createRefreshTokenClientApi();

    const response = await api
      .me()
      .post({ body: _body })
      .execute()
      .then((res) => {
        if (res.statusCode) {
          dispatch(getRegistrationAccessCode(res.statusCode));
          dispatch(fetchUserDataByRefreshToken());
        }
        return getRegisteredUserData(res.body);
      })
      .catch((err: _ErrorResponse) =>
        dispatch(getRegistrationAccessCode(err.statusCode))
      );

    return response;
  }
);

export default updateAddress;
