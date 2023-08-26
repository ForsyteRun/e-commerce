import { _ErrorResponse } from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';

const fetchAllProductsData = createAsyncThunk(
  'productsData/fetchAll',
  async (_, { rejectWithValue }) => {
    const api = createRefreshTokenClientApi();

    const response = await api
      .productProjections()
      .get({ queryArgs: { limit: 20, offset: 0 } })
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

export default fetchAllProductsData;