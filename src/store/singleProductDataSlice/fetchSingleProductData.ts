import { _ErrorResponse } from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';

const fetchSingleProductData = createAsyncThunk(
  'singleProductData/fetch',
  async (productId: string, { rejectWithValue }) => {
    const api = createRefreshTokenClientApi();

    const response = await api
      .productProjections()
      .withId({ ID: productId })
      .get()
      .execute()
      .then((res) => {
        const data = res.body;
        return data;
      })
      .catch((err: _ErrorResponse) => {
        const { message, statusCode } = err;
        return rejectWithValue({ message, statusCode });
      });

    return response;
  }
);

export default fetchSingleProductData;
