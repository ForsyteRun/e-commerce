import {
  CustomerChangePassword,
  _ErrorResponse,
} from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';
import { getRegistrationAccessCode } from 'store/registration/registrationAccess.slice';
import { LoginFormValues, RequestStatusCode } from 'types';
import fetchUserLoginData from './fetchUserLoginData';

const updatePassword = createAsyncThunk(
  'userData/updatePassword',
  async (data: CustomerChangePassword, { dispatch }) => {
    const api = createRefreshTokenClientApi();
    console.log(api);

    const response = await api
      .customers()
      .password()
      .post({ body: data })
      .execute()
      .then((res) => {
        const isPasswordUpdate =
          res.statusCode && res.statusCode === RequestStatusCode.OK;
        console.log('out');

        if (isPasswordUpdate) {
          console.log('in');

          dispatch(getRegistrationAccessCode(res.statusCode!));

          const loginData: LoginFormValues = {
            email: res.body.email,
            password: res.body.password!,
          };

          dispatch(fetchUserLoginData(loginData));
        }
      })
      .catch((err: _ErrorResponse) =>
        dispatch(getRegistrationAccessCode(err.statusCode))
      );

    return response;
  }
);

export default updatePassword;
