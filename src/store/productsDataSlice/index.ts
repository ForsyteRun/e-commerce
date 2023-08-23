import { ProductProjection, _ErrorResponse } from '@commercetools/platform-sdk';
import {
  createSlice,
  createAsyncThunk,
  ActionReducerMapBuilder,
} from '@reduxjs/toolkit';
import { getRefreshTokenCookie } from 'helpers/processRefreshTokenCookie';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';

export const fetchAllProductsData = createAsyncThunk(
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

interface IProductsData {
  data: ProductProjection[] | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: null | string;
}

const initialState: IProductsData = {
  data: null,
  loading: 'idle',
  error: null,
};

const productsDataSlice = createSlice({
  name: 'productsData',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IProductsData>): void => {
    builder
      .addCase(fetchAllProductsData.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchAllProductsData.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = 'succeeded';
      })
      .addCase(fetchAllProductsData.rejected, (state) => {
        state.loading = 'failed';
      });
  },
});

export default productsDataSlice.reducer;
