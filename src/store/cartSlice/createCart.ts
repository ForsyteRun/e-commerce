import { _ErrorResponse } from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';
import getCartData from './helpers/getCartData';

const createCart = createAsyncThunk(
  'cart/createCart',
  async (_, { rejectWithValue }) => {
    const api = createRefreshTokenClientApi();

    const response = await api
      .me()
      .carts()
      .post({ body: { currency: 'EUR' } })
      .execute()
      .then((res) => getCartData(res.body))
      .catch((error: _ErrorResponse) => rejectWithValue({ ...error }));

    return response;
  }
);

export default createCart;
