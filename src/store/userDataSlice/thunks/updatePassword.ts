import {
  CustomerChangePassword,
  _ErrorResponse,
} from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';
import { getRegistrationAccessCode } from 'store/registration/registrationAccess.slice';
import { LoginFormValues, RequestStatusCode } from 'types';
import createAnonymousUser from './createAnonymousUser';
import fetchUserLoginData from './fetchUserLoginData';

const updatePassword = createAsyncThunk(
  'userData/updatePassword',
  async (data: CustomerChangePassword, { dispatch }) => {
    const api = createRefreshTokenClientApi();

    const response = await api
      .me()
      .password()
      .post({ body: data })
      .execute()
      .then(async (res) => {
        const isPasswordUpdate =
          res.statusCode && res.statusCode === RequestStatusCode.OK;

        if (isPasswordUpdate) {
          dispatch(getRegistrationAccessCode(res.statusCode!));
          await dispatch(createAnonymousUser());

          const loginData: LoginFormValues = {
            email: res.body.email,
            password: data.newPassword,
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
