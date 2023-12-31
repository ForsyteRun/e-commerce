import { _ErrorResponse } from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';
import { getRegistrationAccessCode } from 'store/registration/registrationAccess.slice';
import { LoginFormValues, RequestStatusCode } from 'types';
import fetchUserLoginData from './fetchUserLoginData';
import { RegisterUserProps } from './types';

const registerUser = createAsyncThunk(
  'userData/registerUser',
  async (
    { registrationData }: RegisterUserProps,
    { dispatch, rejectWithValue }
  ) => {
    const api = createRefreshTokenClientApi();

    const request = await api
      .customers()
      .post({
        body: registrationData,
      })
      .execute()
      .then((res) => {
        const isUserCreated =
          res.statusCode && res.statusCode === RequestStatusCode.Created;

        if (isUserCreated) {
          dispatch(getRegistrationAccessCode(res.statusCode!));

          const loginData: LoginFormValues = {
            email: registrationData.email,
            password: registrationData.password!,
          };

          dispatch(fetchUserLoginData(loginData));

          dispatch(
            getRegistrationAccessCode(
              RequestStatusCode.Created && RequestStatusCode.OK
            )
          );
        }
      })
      .catch((err: _ErrorResponse) => {
        dispatch(getRegistrationAccessCode(err.statusCode));
        return rejectWithValue({ ...err });
      });

    return request;
  }
);

export default registerUser;
