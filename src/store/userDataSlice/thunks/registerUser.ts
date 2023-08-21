import { _ErrorResponse } from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRefreshTokenCookie } from 'helpers/processRefreshTokenCookie';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';
import { getRegistrationAccessCode } from 'store/registration/registrationAccess.slice';
import { LoginFormValues, RequestStatusCode } from 'types';
import fetchUserLoginData from './fetchUserLoginData';
import { RegisterUserProps } from './types';

const registerUser = createAsyncThunk(
  'userData/registerUser',
  async (
    { registrationData, setOpen, setAccess }: RegisterUserProps,
    { dispatch }
  ) => {
    const refreshToken = getRefreshTokenCookie();
    const api = createRefreshTokenClientApi(refreshToken);

    try {
      const response = await api
        .customers()
        .post({ body: registrationData })
        .execute();

      const isUserCreated =
        response.statusCode &&
        response.statusCode === RequestStatusCode.Created;

      if (isUserCreated) {
        dispatch(getRegistrationAccessCode(response.statusCode!));

        const loginData: LoginFormValues = {
          email: registrationData.email,
          password: registrationData.password!,
        };

        dispatch(fetchUserLoginData(loginData));
        setOpen(true);
        setAccess(true);
      }
    } catch (err) {
      const error = err as _ErrorResponse;
      dispatch(getRegistrationAccessCode(error.statusCode));
      setOpen(true);
      setAccess(false);
    }
  }
);

export default registerUser;
