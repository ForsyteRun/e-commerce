import { PayloadAction } from '@reduxjs/toolkit';
import {
  IUserState,
  ICartData,
  ICartState,
  IUserData,
  RegisteredUserData,
} from 'types';

const setState = (
  state: ICartState | IUserState,
  { payload }: PayloadAction<ICartData | IUserData | RegisteredUserData>
) => {
  state.data = payload;
  state.loading = 'succeeded';
};

export default setState;
