import { ProductProjection, _ErrorResponse } from '@commercetools/platform-sdk';
import {
  createSlice,
  createAsyncThunk,
  ActionReducerMapBuilder,
} from '@reduxjs/toolkit';
import { getRefreshTokenCookie } from 'helpers/processRefreshTokenCookie';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';

export const fetchSingleProductData = createAsyncThunk(
  'singleProductData/fetch',
  async (productId: string, { rejectWithValue }) => {
    const refreshToken = getRefreshTokenCookie();
    const api = createRefreshTokenClientApi(refreshToken);

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

interface ISingleProductData {
  data: ProductProjection | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: null | _ErrorResponse;
}

const initialState: ISingleProductData = {
  data: null,
  loading: 'idle',
  error: null,
};

const singleProductDataSlice = createSlice({
  name: 'singleProductData',
  initialState,
  reducers: {},
  extraReducers: (
    builder: ActionReducerMapBuilder<ISingleProductData>
  ): void => {
    builder
      .addCase(fetchSingleProductData.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchSingleProductData.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = 'succeeded';
      })
      .addCase(fetchSingleProductData.rejected, (state, { payload }) => {
        state.loading = 'failed';
        const error = payload as _ErrorResponse;
        state.error = error;
      });
  },
});

export default singleProductDataSlice.reducer;
