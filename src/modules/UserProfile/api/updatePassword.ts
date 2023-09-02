import { MyCustomerUpdate, _ErrorResponse } from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';
import { getRegistrationAccessCode } from 'store/registration/registrationAccess.slice';
import { getRegisteredUserData } from 'store/userDataSlice/helpers';

const updatePassword = createAsyncThunk(
  'userData/update',
  async (_body: MyCustomerUpdate, { rejectWithValue, dispatch }) => {
    const api = createRefreshTokenClientApi();

    const response = await api
      .me()
      .post({ body: _body })
      .execute()
      .then((res) => {
        dispatch(getRegistrationAccessCode(res.statusCode as number));
        return getRegisteredUserData(res.body);
      })
      .catch((err: _ErrorResponse) => rejectWithValue({ ...err }));

    return response;
  }
);

export default updatePassword;
