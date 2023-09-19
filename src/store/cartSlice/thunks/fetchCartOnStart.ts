import { _ErrorResponse } from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';
import { setIdentifyUserData } from 'store/userDataSlice';
import getCartData from '../helpers/getCartData';
import createCart from './createCart';
import createAnonymousCart from './createAnonymousCart';

const fetchCartOnStart = createAsyncThunk(
  'cart/fetchOnStart',
  async (_, { dispatch, rejectWithValue }) => {
    const api = createRefreshTokenClientApi();

    const response = await api
      .me()
      .activeCart()
      .get()
      .execute()
      .then(({ body }) => {
        const { customerId, anonymousId } = body;

        const data = {
          authenticationMode: customerId ? 'Password' : 'Anonymous',
          id: customerId || anonymousId,
        };

        dispatch(setIdentifyUserData(data));

        return getCartData(body);
      })
      .catch((err: _ErrorResponse) => {
        const isNoRefreshToken =
          err.message ===
          'The refresh token was not found. It may have expired.';
        if (isNoRefreshToken || err.statusCode === 403) {
          dispatch(createAnonymousCart());
        }

        if (err.statusCode === 404) {
          dispatch(createCart());
        }

        return rejectWithValue({ ...err });
      });

    return response;
  }
);

export default fetchCartOnStart;
