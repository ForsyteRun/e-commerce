import { _ErrorResponse } from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';
import getCartData from './helpers/getCartData';

const fetchCartData = createAsyncThunk(
  'cart/fetchData',
  async (_, { rejectWithValue }) => {
    const api = createRefreshTokenClientApi();

    const response = await api
      .me()
      .activeCart()
      .get()
      .execute()
      .then((res) => {
        return getCartData(res.body);
      })
      .catch((err: _ErrorResponse) => {
        if (err.statusCode === 404) {
          api
            .me()
            .carts()
            .post({ body: { currency: 'EUR' } })
            .execute()
            .then((res) => {
              return getCartData(res.body);
            })
            .catch((error: _ErrorResponse) => rejectWithValue({ ...error }));
        }

        return rejectWithValue({ ...err });
      });

    return response;
  }
);

export default fetchCartData;
