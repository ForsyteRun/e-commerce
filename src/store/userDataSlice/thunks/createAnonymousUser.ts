import { createAsyncThunk } from '@reduxjs/toolkit';
import createAnonymousClientApi from '../../../services/sdkClient/createAnonymousClientApi';
import { IUserDataState } from '../../../types';

const createAnonymousUser = createAsyncThunk(
  'userData/createAnonymousUser',
  async () => {
    const api = createAnonymousClientApi();

    const response = await api
      .me()
      .carts()
      .post({ body: { currency: 'EUR' } })
      .execute();

    const data: IUserDataState = {
      type: 'anonymous',
      id: response.body.anonymousId,
      cartId: response.body.id,
    };

    return data;
  }
);

export default createAnonymousUser;
