import { PayloadAction } from '@reduxjs/toolkit';
import { IAnonymousUserData, IUserState } from 'types';

const setUserData = (
  state: IUserState,
  { payload }: PayloadAction<IAnonymousUserData>
) => {
  state.data = payload;
  state.loading = 'succeeded';
};

export default setUserData;
