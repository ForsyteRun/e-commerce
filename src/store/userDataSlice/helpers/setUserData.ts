import { PayloadAction } from '@reduxjs/toolkit';
import { IUserDataState, IUserState } from 'types';

const setUserData = (
  state: IUserState,
  { payload }: PayloadAction<IUserDataState>
) => {
  state.data = payload;
  state.loading = 'succeeded';
};

export default setUserData;
