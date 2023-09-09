import { MyCustomerUpdate, _ErrorResponse } from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';
import { getRegistrationAccessCode } from 'store/registration/registrationAccess.slice';
import getRegisteredUserData from 'store/userDataSlice/helpers/getRegisteredUserData';

const updateUserData = createAsyncThunk(
  'userData/update',
  async (_body: MyCustomerUpdate, { rejectWithValue, dispatch }) => {
    const api = createRefreshTokenClientApi();

    const response = await api
      .me()
      .post({ body: _body })
      .execute()
      .then((res) => {
        if (res.statusCode) {
          dispatch(getRegistrationAccessCode(res.statusCode));
        }
        return getRegisteredUserData(res.body);
      })
      .catch((err: _ErrorResponse) => rejectWithValue({ ...err }));

    return response;
  }
);

export default updateUserData;
