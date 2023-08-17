import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  isLogged: boolean;
}

const initialState: IUserState = {
  isLogged: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoginState(state: IUserState, action: PayloadAction<boolean>) {
      // eslint-disable-next-line no-param-reassign
      state.isLogged = action.payload;
    },
  },
});

export const { setUserLoginState } = userSlice.actions;
export default userSlice.reducer;
