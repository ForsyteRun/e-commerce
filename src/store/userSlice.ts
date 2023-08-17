import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  isLogged: boolean;
  isUpdated: boolean;
}

const initialState: IUserState = {
  isLogged: false,
  isUpdated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoginState(state: IUserState, action: PayloadAction<boolean>) {
      state.isLogged = action.payload;
      state.isUpdated = true;
    },
  },
});

export const { setUserLoginState } = userSlice.actions;
export default userSlice.reducer;
