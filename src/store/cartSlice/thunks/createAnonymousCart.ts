import { _ErrorResponse } from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createAnonymousClientApi from 'services/sdkClient/createAnonymousClientApi';
import { setIdentifyUserData } from 'store/userDataSlice';
import { IUserData } from 'types';
import getCartData from '../helpers/getCartData';

const createAnonymousCart = createAsyncThunk(
  'cart/createAnonymous',
  async (_, { dispatch, rejectWithValue }) => {
    const api = createAnonymousClientApi();

    const response = await api
      .me()
      .carts()
      .post({ body: { currency: 'EUR' } })
      .execute()
      .then(({ body }) => {
        const data: IUserData = {
          authenticationMode: 'Anonymous',
          id: body.anonymousId,
        };

        dispatch(setIdentifyUserData(data));

        return getCartData(body);
      })
      .catch((err: _ErrorResponse) => rejectWithValue({ ...err }));

    return response;
  }
);

export default createAnonymousCart;
