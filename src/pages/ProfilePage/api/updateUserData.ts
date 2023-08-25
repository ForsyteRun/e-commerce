import { MyCustomerUpdate, _ErrorResponse } from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';
import { getRegisteredUserData } from 'store/userDataSlice/helpers';

const updateUserData = createAsyncThunk(
  'userData/update',
  async (_body: MyCustomerUpdate, { rejectWithValue }) => {
    const api = createRefreshTokenClientApi();

    const response = await api
      .me()
      .post({ body: _body })
      .execute()
      .then((res) => getRegisteredUserData(res.body))
      .catch((err: _ErrorResponse) => rejectWithValue({ ...err }));

    return response;
  }
);

export default updateUserData;
