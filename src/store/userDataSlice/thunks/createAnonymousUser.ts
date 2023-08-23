import { createAsyncThunk } from '@reduxjs/toolkit';
import createAnonymousClientApi from 'services/sdkClient/createAnonymousClientApi';
import { IAnonymousUserData } from 'types';

const createAnonymousUser = createAsyncThunk(
  'userData/createAnonymousUser',
  async () => {
    const api = createAnonymousClientApi();

    const response = await api
      .me()
      .carts()
      .post({ body: { currency: 'EUR' } })
      .execute()
      .then((res) => {
        const data: IAnonymousUserData = {
          authenticationMode: 'Anonymous',
          id: res.body.anonymousId,
        };

        return data;
      });

    return response;
  }
);

export default createAnonymousUser;
