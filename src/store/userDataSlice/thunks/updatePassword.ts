import {
  CustomerChangePassword,
  _ErrorResponse,
} from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';
import { getRegistrationAccessCode } from 'store/registration/registrationAccess.slice';
import { RequestStatusCode } from 'types';

const updatePassword = createAsyncThunk(
  'userData/updatePassword',
  async (data: CustomerChangePassword, { dispatch }) => {
    const api = createRefreshTokenClientApi();

    const response = await api
      .customers()
      .password()
      .post({ body: data })
      .execute()
      .then(() => dispatch(getRegistrationAccessCode(RequestStatusCode.OK)))
      .catch((err: _ErrorResponse) =>
        dispatch(getRegistrationAccessCode(err.statusCode))
      );

    return response;
  }
);

export default updatePassword;
