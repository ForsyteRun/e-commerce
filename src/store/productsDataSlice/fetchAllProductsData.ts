import { _ErrorResponse } from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRefreshTokenCookie } from 'helpers/processRefreshTokenCookie';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';

const fetchAllProductsData = createAsyncThunk(
  'productsData/fetchAll',
  async (_, { rejectWithValue }) => {
    const refreshToken = getRefreshTokenCookie();
    const api = createRefreshTokenClientApi(refreshToken);

    const response = await api
      .productProjections()
      .get()
      .execute()
      .then((res) => {
        const data = res.body.results;
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
