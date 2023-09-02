import {
  CustomerChangePassword,
  _ErrorResponse,
} from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';

const updatePassword = createAsyncThunk(
  'userData/updatePassword',
  async (_body: CustomerChangePassword, { rejectWithValue }) => {
    const api = createRefreshTokenClientApi();

    const response = await api
      .customers()
      .password()
      .post({ body: _body })
      .execute()
      .then((res) => res)
      .catch((err: _ErrorResponse) => rejectWithValue({ ...err }));

    return response;
  }
);

export default updatePassword;
