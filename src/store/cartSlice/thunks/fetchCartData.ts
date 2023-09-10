import { _ErrorResponse } from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';
import createCart from './createCart';
import getCartData from '../helpers/getCartData';

const fetchCartData = createAsyncThunk(
  'cart/fetchData',
  async (_, { dispatch, rejectWithValue }) => {
    const api = createRefreshTokenClientApi();

    const response = await api
      .me()
      .activeCart()
      .get()
      .execute()
      .then((res) => getCartData(res.body))
      .catch((err: _ErrorResponse) => {
        if (err.statusCode === 404) {
          dispatch(createCart());
        }

        return rejectWithValue({ ...err });
      });

    return response;
  }
);

export default fetchCartData;
