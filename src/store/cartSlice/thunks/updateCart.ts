import {
  MyCartUpdateAction,
  _ErrorResponse,
} from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';
import store from 'store';
import getCartData from '../helpers/getCartData';

const updateCart = createAsyncThunk(
  'cart/update',
  async (
    action: MyCartUpdateAction | MyCartUpdateAction[],
    { rejectWithValue }
  ) => {
    const api = createRefreshTokenClientApi();

    const { getState } = store;
    const { id: ID, version } = getState().cartSlice.data!;

    const actions = Array.isArray(action) ? action : [action];

    const response = await api
      .me()
      .carts()
      .withId({ ID })
      .post({
        body: {
          version,
          actions,
        },
      })
      .execute()
      .then((res) => getCartData(res.body))
      .catch((err: _ErrorResponse) => rejectWithValue({ ...err }));

    return response;
  }
);

export default updateCart;
