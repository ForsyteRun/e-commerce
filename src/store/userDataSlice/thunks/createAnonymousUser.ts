import { createAsyncThunk } from '@reduxjs/toolkit';
import createAnonymousClientApi from 'services/sdkClient/createAnonymousClientApi';
import { IUserDataState } from 'types';

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
        const data: IUserDataState = {
          type: 'anonymous',
          id: res.body.anonymousId,
        };

        return data;
      });

    return response;
  }
);

export default createAnonymousUser;
