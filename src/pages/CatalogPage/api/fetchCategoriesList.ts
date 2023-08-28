import { _ErrorResponse } from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';

const fetchCategoriesList = createAsyncThunk(
  'categories/fetch',
  async (_, { rejectWithValue }) => {
    const api = createRefreshTokenClientApi();

    const response = api
      .categories()
      .get()
      .execute()
      .then((res) => res.body.results)
      .catch((err: _ErrorResponse) => rejectWithValue({ ...err }));

    return response;
  }
);

export default fetchCategoriesList;
