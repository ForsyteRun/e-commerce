import { CartDraft } from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';

const createCart = createAsyncThunk(
  'cart/createCart',
  async (body: CartDraft) => {
    const api = createRefreshTokenClientApi();

    const response = await api
      .me()
      .carts()
      .post({ body })
      .execute()
      // eslint-disable-next-line no-console
      .then((res) => console.log(res))
      .catch(() => {});

    return response;
  }
);

export default createCart;
