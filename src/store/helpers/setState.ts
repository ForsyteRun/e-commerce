import { PayloadAction } from '@reduxjs/toolkit';
import {
  IUserState,
  ICartData,
  ICartState,
  IAnonymousUserData,
  RegisteredUserData,
} from 'types';

const setState = (
  state: ICartState | IUserState,
  {
    payload,
  }: PayloadAction<ICartData | IAnonymousUserData | RegisteredUserData>
) => {
  state.data = payload;
  state.loading = 'succeeded';
};

export default setState;
